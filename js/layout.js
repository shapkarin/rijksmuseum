import Marionette from 'backbone.marionette';

import { Header, EventsListView } from './views';

export const Root = Marionette.LayoutView.extend({

    el: '#app',

    regions: {
        header: '#header',
        main: '#main'
    },

    initialize: function() {
        this.showChildView('header', new Header());
        this.showChildView('main', new EventsListView());
    }

});
