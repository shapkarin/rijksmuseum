import APP from './application';
import { Root } from './layout'
import { EventsList } from './events';
import Backbone from 'backbone';

const now = new Date();
const today = now.toISOString().slice(0,10);

APP.on('start', function () {
    APP.root = new Root({
        collection: new EventsList(),
        today
    });

    // const router = new Router();
    Backbone.history.start();
});

APP.start();
