import Marionette from 'backbone.marionette';
import Backbone from 'backbone';

import headerTpl from './templates/header.tpl';
import eventTpl from './templates/event.tpl';
import eventsListTpl from './templates/eventsList.tpl';

export const ShirtView = Marionette.ItemView.extend({
    tagName: 'li',
    template: eventTpl,
    modelEvents: {
        change: 'render'
    },
});

export const ShirtsListView = Backbone.Marionette.CompositeView.extend({
    template: eventsListTpl,
    childView: ShirtView,
    childViewContainer: '#events-list',
});

export const Header = Marionette.ItemView.extend({
    template: headerTpl
});
