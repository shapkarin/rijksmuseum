import Marionette from 'backbone.marionette';
import Backbone from 'backbone';

import { EventsList, calendar } from './events';

import headerTpl from './templates/header.tpl';
import eventTpl from './templates/event.tpl';
import eventsListTpl from './templates/eventsList.tpl';

export const EventView = Marionette.ItemView.extend({
    tagName: 'li',
    template: eventTpl,
    modelEvents: {
        change: 'render'
    },
});

export const EventsListView = Backbone.Marionette.CompositeView.extend({
    template: eventsListTpl,
    collection: new EventsList(),
    childView: EventView,
    childViewContainer: '#events-list',
});

export const Header = Marionette.ItemView.extend({
    model: calendar,
    template: headerTpl
});
