angular.module('serveis')
    .factory('postPenyes', () => {
        let funcions = {
            post: (novaPenya) => {
                return console.log(novaPenya);
            }
        };
        return funcions;
    });