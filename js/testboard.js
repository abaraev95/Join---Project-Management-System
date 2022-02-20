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
        document.getElementById('toDo').innerHTML += generateTodoHTML(task,i);
    }

    let inProgress = boardArray.filter(t => t['generic_term'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = "";

    for (let i = 0; i < inProgress.length; i++) {
        const task = inProgress[i];
        document.getElementById('inProgress').innerHTML += generateTodoHTML(task,i);
    }

    let testing = boardArray.filter(t => t['generic_term'] == 'testing');

    document.getElementById('testing').innerHTML = "";

    for (let i = 0; i < testing.length; i++) {
        const task = testing[i];
        document.getElementById('testing').innerHTML += generateTodoHTML(task,i);
    }

    let done = boardArray.filter(t => t['generic_term'] == 'done');

    document.getElementById('done').innerHTML = "";

    for (let i = 0; i < done.length; i++) {
        const task = done[i];
        document.getElementById('done').innerHTML += generateTodoHTML(task,i);
    }
}

function generateTodoHTML(task) {
    return `<div draggable="true" ondragstart="startDragging(${task['id']})" id="pinContainer">
                <span class="pinNames">${task['assignedTo']}<div class="buttonsDiv"><button onclick="swap_generic_term(${task['id']})">+</button><button onclick="delete_task(${task['id']})">X</button></div></span>   
                <div class="pinInfo">
                    <span>${task['description']}</span>
                    <img src='${task['userImage']}'>
                </div>

            </div>`;
}

function startDragging(id) {
    draggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

async function drop(generic_term) {
    
    let index;
    for(let i = 0; i < boardArray.length; i++) {
        if(boardArray[i]['id'] === draggedElement){
            index = i;
            break;
        }
    }
    boardArray[index]['generic_term'] = generic_term;
    await backend.setItem('boardTasks', JSON.stringify(boardArray));
    loadPins();
}

function hightlight(id) {
    document.getElementById(id).classList.add('dropAreaHighlight');
}

function removeHightlight(id) {
    document.getElementById(id).classList.remove('dropAreaHighlight');
}

async function delete_task(task) {
        let term = task;
        let position = boardArray.indexOf();
        console.log('delete task:', position);
        /*boardArray.splice(position, 1);
        await backend.deleteItem('backlogTasks');
        await backend.setItem('backlogTasks', JSON.stringify(backlogTasks));
        loadPins();*/
}

async function swap_generic_term(){ 

}