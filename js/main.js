import APP from './application';
import { Root } from './layout'
import { EventsList } from './events';
import Backbone from 'backbone';

APP.on('start', function () {
    APP.root = new Root({
        collection: new EventsList()
    });

    // const router = new Router();
    Backbone.history.start();
});

APP.start();
