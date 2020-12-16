// Toutes les requêtes vers l'api sont ICI (SAUF POUR LES WEBSOCKETS ALORS ELLES SONT DIRECTEMENT DANS LES COMPOSANTS)

/**
 * @description Envoie une requête pour connecter l'utilisateur
 * @param {String} username
 * @param {String} password
 * @returns {Boolean|JSON}
 */
export function requestLogin(username, password) {
    const url = "http://elamenor-rest.herokuapp.com/api/auth/login";
    return fetch(url, {
        method: 'POST', headers: {Accept: 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({username, password})
    }).then(async (res) => {
        if(res.status.toString()[0] !== "2") return false;
        else return await res.json();
    }).catch((e) => console.error(e));
}

/**
 * @description Vérifie un JWT
 * @param {String} jwt
 * @returns {Boolean|JSON}
 */
export function requestCheckJWT(jwt) {
    console.log(jwt);
    const url = "http://elamenor-rest.herokuapp.com/api/auth/checkJWT";
    return fetch(url, {
        method: 'POST', headers: {Accept: 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({jwt})
    }).then(async (res) => {
        console.log(res.status);
        if(res.status.toString()[0] !== "2") return false;
        else return true;
    }).catch((e) => console.error(e));
}