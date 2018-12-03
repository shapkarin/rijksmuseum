import APP from './application';
import { Root } from './layout';

APP.on('start', function () {
    APP.root = new Root();
});

APP.start();
