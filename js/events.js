import Backbone from 'backbone';
import LocalStorage from 'backbone.localstorage';
import $ from 'jquery';

const now = new Date();
const today = now.toISOString().slice(0,10);
const KEY = 'lPwqt7oL';

const Event = Backbone.Model.extend({
    defaults: {
        imageLoading: true
    },
    initialize: function() {
        const model = this;
        const { url } = model.get('pageRef');
        const parsedUrl = url.substring(
            // stupid..
            url.indexOf('.nl/') + 4
        );

        $.ajax({
            url: `https://www.rijksmuseum.nl/api/pages/${parsedUrl}?key=${KEY}&format=json`
        }).done((result) => {
            model.set({
                image: result.contentPage.headerImage,
                imageLoading: false
            });
        });
    },
});

export const EventsList = Backbone.Collection.extend({
    model: Event,
    url: `https://www.rijksmuseum.nl/api/en/agenda/${today}?key=${KEY}&format=json`,
    initialize: function() {
        this.fetch();
    },
    parse: function(response) {
        return response.options;
    },
});
