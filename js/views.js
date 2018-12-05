import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import $ from 'jquery';
import moment from 'moment';

import APP from './application';
import { EventsList, calendar } from './events';
import { translate } from './constants';

import headerTpl from './templates/header.tpl';
import eventTpl from './templates/event.tpl';
import eventsListTpl from './templates/eventsList.tpl';

export const EventView = Marionette.ItemView.extend({
    template: eventTpl,
    modelEvents: {
        change: 'render'
    },

    templateHelpers: {
        moment
    }
});

export const EventsListView = Backbone.Marionette.CompositeView.extend({
    template: eventsListTpl,
    collection: new EventsList(),
    childView: EventView,
    childViewContainer: '#EventsList',
    initialize: function(){
        this.listenTo(calendar, 'change', () => this.collection.fetch());
    },

    onBeforeRender: function(){
        let lang = calendar.get('lang');
        moment.locale(lang);
    },
});

export const Header = Marionette.ItemView.extend({
    model: calendar,
    template: headerTpl,
    modelEvents: {
        change: 'render'
    },
    ui: {
        select: '#newDate'
    },
    events: {
        'change @ui.select': 'search',
        'click .changeLang': 'changeLang'
    },
    onBeforeRender: function(){
        let lang = calendar.get('lang');
        moment.locale(lang);
    },
    templateHelpers: {
        translate,
        foramtDate: date => {
            return moment(date).format('Do MMM, h:mm a, ddd')
        }
    },
    search: function(){
        const today = this.ui.select.val();
        const lang = this.model.get('lang');
        this.model.set({ today });
        APP.router.navigate(`/${lang}/${today}`, { trigger: false });
    },
    changeLang: function(e){
        const lang = $(e.target).data('lang');
        const today = this.model.get('today');
        this.model.set({ lang })
        APP.router.navigate(`/${lang}/${today}`, { trigger: false });
    }
});
