import Marionette from 'backbone.marionette';
import { Header, EventsListView } from './views';

export const Root = Marionette.LayoutView.extend({

    el: '#app',

    regions: {
        header: '#header',
        main: '#main'
    },

    initialize: function() {
        this.showHeader();
        this.showEventsList();
    },

    showHeader: function () {
        const header = new Header();
        this.showChildView('header', header);
    },

    showEventsList: function () {
        this.showChildView('main', new EventsListView({
            collection: this.collection
        }));
    }
});
