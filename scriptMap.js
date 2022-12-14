function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

function getUsers(map) {
    let users = [];
    for ([key, value] of map) {
        if (value === 'User') {
            users.push(key);
        }
    }
    return users;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Zé', 'Admin');
usuarios.set('Marcelo', 'User');
usuarios.set('Antonio', 'Admin');
usuarios.set('Julio', 'User');

console.log(getAdmins(usuarios));
console.log(getUsers(usuarios));