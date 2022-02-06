let tasks = [{
    'ID': 0,
    'names': 'Alex',
    'userImg': '../img/icon plus.png',
    'category': 'Purchasing',
    'urgency': 'Middel',
    'description': 'Description your task...!'
},
{
    'ID': 1,
    'names': 'Willi',
    'userImg': '../img/willi.jpg',
    'category': 'Managment',
    'urgency': 'Hight',
    'description': 'Description your task...!'
},
{
    'ID': 2,
    'names': 'Georg',
    'userImg': '../img/georg.jpg',
    'category': 'Controlling',
    'urgency': 'Very High',
    'description': 'Description your task...!'
}
];

function loadPins() {
    document.getElementById('toDo').innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        document.getElementById('toDo').innerHTML += `
        <div id="pinContainer">
           <span class="pinNames">${task['names']}</span>
           <div class="pinInfo">
                <span>${task['description']}</span>
                <img src='${task['userImg']}'>
           </div>

        </div>
        `;
    }
}