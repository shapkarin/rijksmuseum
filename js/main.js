import APP from './application';
import { Root } from './layout';
import Marionette from 'backbone.marionette';

import { calendar } from './events';

APP.on('start', function () {
    APP.root = new Root();

    const Controller = Marionette.Controller.extend({
        search: function(lang, date) {
            calendar.set({
                lang,
                today: date
            })
        },
    });
    
    const controller = new Controller();

    const router = new Marionette.AppRouter({
        controller,
        appRoutes: {
            ":lang/:date": "search",
        }
    });
    
    Backbone.history.start();
});

APP.start();
