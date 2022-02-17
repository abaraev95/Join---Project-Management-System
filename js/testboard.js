/*let tasks = [{
        'id': 0,
        'names': 'Alex',
        'userImg': '../img/icon plus.png',
        'category': 'Purchasing',
        'urgency': 'Middel',
        'description': 'Description your task...!',
        'generic_term': 'toDo'
    },
    {
        'id': 1,
        'names': 'Willi',
        'userImg': '../img/willi.jpg',
        'category': 'Managment',
        'urgency': 'Hight',
        'description': 'Description your task...!',
        'generic_term': 'toDo'
    },
    {
        'id': 2,
        'names': 'Georg',
        'userImg': '../img/georg.jpg',
        'category': 'Controlling',
        'urgency': 'Very High',
        'description': 'Description your task...!',
        'generic_term': 'toDo'
    },
    {
        'id': 3,
        'names': 'Georg',
        'userImg': '../img/georg.jpg',
        'category': 'Controlling',
        'urgency': 'Very High',
        'description': 'Description your task...!',
        'generic_term': 'inProgress'
    }
];*/

let draggedElement;

async function loadPins() {
    setURL('http://gruppe-163.developerakademie.net/Alex/smallest_backend_ever-master');
    await downloadFromServer();
    backlogTasks = JSON.parse(backend.getItem('tasks')) || [];
    boardArray = JSON.parse(backend.getItem('boardTasks')) || []; 

    let toDo = boardArray.filter(t => t['generic_term'] == 'toDo');

    document.getElementById('toDo').innerHTML = "";

    for (let i = 0; i < toDo.length; i++) {
        const task = toDo[i];
        document.getElementById('toDo').innerHTML += generateTodoHTML(task);
    }

    let inProgress = boardArray.filter(t => t['generic_term'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = "";

    for (let i = 0; i < inProgress.length; i++) {
        const task = inProgress[i];
        document.getElementById('inProgress').innerHTML += generateTodoHTML(task);
    }

    let testing = boardArray.filter(t => t['generic_term'] == 'testing');

    document.getElementById('testing').innerHTML = "";

    for (let i = 0; i < testing.length; i++) {
        const task = testing[i];
        document.getElementById('testing').innerHTML += generateTodoHTML(task);
    }

    let done = boardArray.filter(t => t['generic_term'] == 'done');

    document.getElementById('done').innerHTML = "";

    for (let i = 0; i < done.length; i++) {
        const task = done[i];
        document.getElementById('done').innerHTML += generateTodoHTML(task);
    }
}

function generateTodoHTML(task) {
    return `<div draggable="true" ondragstart="startDragging(${task['id']})" id="pinContainer">
                <span class="pinNames">${task['names']}<button>X</button></span>   
                <div class="pinInfo">
                    <span>${task['description']}</span>
                    <img src='${task['userImg']}'>
                </div>

            </div>`;
}

function startDragging(id) {
    draggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(generic_term) {
    tasks[draggedElement]['generic_term'] = generic_term;
    loadPins();
}

function hightlight(id) {
    document.getElementById(id).classList.add('dropAreaHighlight');
}

function removeHightlight(id) {
    document.getElementById(id).classList.remove('dropAreaHighlight');
}

