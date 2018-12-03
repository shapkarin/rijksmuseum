import APP from './application';
import { Root } from './layout';
import Backbone from 'backbone';

APP.on('start', function () {
    APP.root = new Root();
});

APP.start();
