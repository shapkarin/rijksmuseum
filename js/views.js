import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import $ from 'jquery';
import moment from 'moment';

import { EventsList, calendar } from './events';

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
        this.listenTo(calendar, 'change', () => {
            this.collection.fetch();
        });
    }
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

    search: function(){
        this.model.set(
            'today', this.ui.select.val()
        )
    },

    changeLang: function(e){
        this.model.set(
            'lang', $(e.target).data('lang')
        )
    }
});
