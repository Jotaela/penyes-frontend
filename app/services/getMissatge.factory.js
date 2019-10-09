angular.module('serveis')
    .factory('getMissatge', () => {
        let funcions = {
            perId: (id) => {
                return { id: id, descripcio: "Encara no funciona" };
            },
            all: () => {
                return [
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"},
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"},
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"},
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"},
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"},
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"},
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"},
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"},
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"},
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"},
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"},
                    {foto: "sdasd.jpg", remitent: "Jotaela", cos: "l'altre dia viag a nara c om,prar peix i carn adasdisdmnao das dsad asdad asjdakjd acdkjan adasjd asdasdsad da da ksd a jd sa sd"}
                ];
            }
        };
        return funcions;
    });