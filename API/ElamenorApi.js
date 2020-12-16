// Récupére tous les messages du tchats. FIXME: Les récupérer trier et mettre une limite max de messages
export function getTchat() {
    const url = "http://localhost:5000/api/tchat";
    return fetch(url).then((res) => res.json()).catch((e) => console.error(e));
}

/**
 * @description Ouvre un tunnel avec l'api web socket du tchat. Les events sont disponible avec l'objet retourné (onopen, onmessage, onerror, onclose)
 * @returns {WebSocket}
 */
export function getTchatWs() {
    return new WebSocket("ws://elamenor-rest.herokuapp.com/ws/tchat");
}

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