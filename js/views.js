import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import $ from 'jquery';
import moment from 'moment';

import APP from './application';
import { eventsList, calendar } from './events';
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
    collection: eventsList,
    childView: EventView,
    childViewContainer: '#EventsList',

    onBeforeRender: function(){
        moment.locale(
            calendar.get('lang')
        );
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
        moment.locale(
            calendar.get('lang')
        );
    },
    templateHelpers: {
        translate,
        foramtDate: date => {
            return moment(date).format('Do MMMM, dddd')
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
