import Backbone from 'backbone';
import $ from 'jquery';
import { key, today } from './constants';

const Calendar = Backbone.Model.extend({
    defaults: {
        today
    },
});

export const calendar = new Calendar();

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
            url: `https://www.rijksmuseum.nl/api/pages/${parsedUrl}?key=${key}&format=json`
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
    url: `https://www.rijksmuseum.nl/api/en/agenda/${calendar.get('today')}?key=${key}&format=json`,
    initialize: function() {
        this.fetch();
    },
    parse: function(response) {
        return response.options;
    },
});
