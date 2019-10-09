angular.module('serveis')
    .factory('getPenyes', () => {
        let funcions = {
            perId: (id) => {
                return {id: id , nom: "(nom) " +id};
            },
            all: () => {
                return [
                    { id: 'ronda', nom: 'Ronda' , cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ronda', nom: 'Ronda' , cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ronda', nom: 'Ronda' , cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ronda', nom: 'Ronda' , cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ronda', nom: 'Ronda' , cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ronda', nom: 'Ronda' , cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ronda', nom: 'Ronda' , cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ronda', nom: 'Ronda' , cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ronda', nom: 'Ronda' , cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ronda', nom: 'Ronda' , cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'fotli_fort', nom: 'Fotli Fort', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ultima_planta', nom: 'Ultima Planta', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ultima_planta', nom: 'Ultima Planta', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ultima_planta', nom: 'Ultima Planta', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ultima_planta', nom: 'Ultima Planta', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ultima_planta', nom: 'Ultima Planta', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ultima_planta', nom: 'Ultima Planta', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ultima_planta', nom: 'Ultima Planta', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ultima_planta', nom: 'Ultima Planta', cap1: 'Kike', cap2: 'blanca', num: 20 },
                    { id: 'ultima_planta', nom: 'Ultima Planta', cap1: 'Kike', cap2: 'blanca', num: 20 }
                ];
            }
        };
        return funcions;
    });