angular.module('serveis')
    .factory('getPenyes', () => {
        let funcions = {
            perId: (id) => {
                return {id: id , nom: "(nom) " +id};
            },
            all: () => {
                return [
                    { id: 'ronda', nom: 'Ronda' },
                    { id: 'fotli_fort', nom: 'Fotli Fort' },
                    { id: 'ultima_planta', nom: 'Ultima Planta' }
                ];
            }
        };
        return funcions;
    });