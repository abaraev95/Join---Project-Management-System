setURL('http://gruppe-163.developerakademie.net/smallest_backend_ever');



let users = [];



async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}

async function addUser() {
    await backend.setItem('users', JSON.stringify(users));
    input = document.getElementById('inputfeald').value = '';

}

function deleteUser(name) {
    backend.deleteItem('users', name);

}