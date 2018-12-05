import APP from './application';
import { Root } from './layout';
import Marionette from 'backbone.marionette';

import { calendar } from './events';

APP.on('start', function () {
    APP.root = new Root();

    const Controller = Marionette.Controller.extend({
        changeLang: function(lang) {
            calendar.set({ lang });
        },
        search: function(lang, date) {
            calendar.set({
                lang,
                today: date
            })
        },
    });
    
    const controller = new Controller();

    APP.router = new Marionette.AppRouter({
        controller,
        appRoutes: {
            ':lang': 'changeLang',
            ':lang/:date': 'search'
        }
    });
    
    Backbone.history.start();
});

APP.start();
