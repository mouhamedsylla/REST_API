import crypto from 'crypto';

const SECRET = 'SYLLA-REST-API';
/*
 La fonction random utilise la méthode randomBytes de la bibliothèque crypto pour générer
 des octets aléatoires, puis les convertit en chaîne de caractères encodée en base64. 
 Cette fonction est utilisée pour générer un sel aléatoire pour sécuriser le mot de passe 
 de l'utilisateur lors de sa création.
**/
export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};

/*
 La fonction authentication prend deux paramètres : salt, qui est le sel aléatoire généré précédemment, 
 et password, qui est le mot de passe de l'utilisateur. Cette fonction utilise la méthode createHmac de
 la bibliothèque crypto pour créer un HMAC (hash-based message authentication code) à partir de la 
 concaténation du sel et du mot de passe, séparés par une barre oblique ("/"). Elle utilise ensuite 
 la méthode update pour ajouter la chaîne de caractères SECRET au HMAC, puis la méthode digest pour 
 calculer la valeur de hachage finale au format hexadécimal.
**/