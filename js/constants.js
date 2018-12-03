const now = new Date();

// maybe write something else..
export const today = now
    .toLocaleDateString('nl')
    .split('-')
    .reverse()
    .map(function(date, i){
        if(i === 0){
            return date
        }else {
            return ('0' + date).slice(-2)
        }
    }).join('-');

export const key = 'lPwqt7oL';