import moment from 'moment';
export const today = moment().format('YYYY-MM-DD')
export const key = 'lPwqt7oL';

export const translate = function(word, lang){
    const voc = {
        "nl": {
            "Date": "Datum"
        }
    }
    if(lang !== 'en'){
        return voc[lang][word];
    }else{
        return word
    }
}