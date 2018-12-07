import Backbone from 'backbone';
import $ from 'jquery';
import moment from 'moment';

import { key, today } from './constants';

const nextDays = [...Array(30)].map(function(item, index){
    return moment(today).add(index, 'days').format('YYYY-MM-DD')
});

const Calendar = Backbone.Model.extend({
    defaults: {
        today,
        choose: nextDays,
        lang: 'nl'
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
            url.indexOf('.nl/') + 4
        );

        $.ajax({
            url: `https://www.rijksmuseum.nl/api/pages/${parsedUrl}?key=${key}&format=json`
        }).done(function(result){
            model.set({
                image: result.contentPage.headerImage,
                imageLoading: false
            });
        });
    },
});

const EventsList = Backbone.Collection.extend({
    model: Event,
    url: function(){
        const { lang, today } = calendar.attributes;
        return `https://www.rijksmuseum.nl/api/${lang}/agenda/${today}?key=${key}&format=json`;
    },
    initialize: function() {
        this.listenTo(calendar, 'change', () => this.fetch());
    },
    parse: function(response) {
        return response.options;
    },
});

export const eventsList = new EventsList();
