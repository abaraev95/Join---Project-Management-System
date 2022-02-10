setURL('http://gruppe-163.developerakademie.net/smallest_backend_ever');


async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];

    showTast();
}

let users = [{
        'userName': 'Alex',
        'userImage': '../img/logo.png'
    },
    {
        'userName': 'Willi',
        'userImage': '../img/AddTask.PNG'
    },
    {
        'userName': 'Georg',
        'userImage': '../img/georg.jpg'
    }
];

let backlogTasks = [];

let plusButton = '../img/icon plus.png';
let selectedUser;


function loadUsers() {
    let assignedUsers = document.getElementById('assigned-to-container');

    for (let i = 0; i < users.length; i++) {
        assignedUsers.innerHTML += `
            <div class="user-profile">
                <img id="user-id-${i}" src='${users[i]['userImage']}' onclick="assignedToUser('${users[i]['userName']}', ${i})">
                <div>${users[i]['userName']}</div>
            </div>
        `;
    }

    /*  PLUS BUTTON
    assignedUsers.innerHTML += `
        <img src='${plusButton}'>
    `;
    */
}

function assignedToUser(username, index) {
    selectedUser = document.getElementById('selected-user').value = username;
    //  selectedUser.value = username; VAR Global definiert & befehl zusammengefasst. GS

    highlightSelectedUser(index);
}

function highlightSelectedUser(index) {
    deleteAllHighlights();
    document.getElementById('user-id-' + index).classList.add('highlight-selected-user');
}

function deleteAllHighlights() {
    for (let i = 0; i < users.length; i++) {
        document.getElementById('user-id-' + i).classList.remove('highlight-selected-user');
    }
}


function cancelCommand() {
    let popup = document.getElementById('clearPopup');

    popup.style = 'display: flex';
}

function clearAll() {
    document.getElementById('taskTitle').value = '';
    document.getElementById('select-date').value = '';
    document.getElementById('textarea').value = '';
    document.getElementById('selected-user').value = '';
    document.getElementById('category').value = 'Management';
    document.getElementById('urgency').value = 'Low';
    // deleteAllHighlights(); Wird schon aufgerufen in createTask - GS
    document.getElementById('clearPopup').style = 'display: none;'

}

function noClearing() {
    document.getElementById('clearPopup').style = 'display: none;'
}

async function createTask() {

    let title = document.getElementById('taskTitle').value;
    let date = document.getElementById('select-date').value;
    let category = document.getElementById('category');
    let categorySelected = category.options[category.selectedIndex].text;
    let urgency = document.getElementById('urgency');
    let urgencySelected = urgency.options[urgency.selectedIndex].text;
    let description = document.getElementById('textarea').value;
    let selectedUser = document.getElementById('selected-user').value;

    let task = {
        'title': title,
        'date': date,
        'category': categorySelected,
        'urgency': urgencySelected,
        'description': description,
        'assignedTo': selectedUser
    };
    console.log('Task: ', task);
    backlogTasks.push(task);
    await backend.setItem('backlogTasks', JSON.stringify(backlogTasks));
    init();
    clearAll();
    deleteAllHighlights();
}

function showTast() {
    document.getElementById('main').innerHTML = ``;
    for (let i = 0; i < backlogTasks.length; i++) {
        const element = backlogTasks[i];
        document.getElementById('main').innerHTML = `
        <div>${element}</div>
        `;
    }
}