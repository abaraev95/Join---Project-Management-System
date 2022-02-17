let boardArray = []; // Objecte zum Bord übergeben.


async function renderBacklog() {
    setURL('http://gruppe-163.developerakademie.net/Alex/smallest_backend_ever-master');
    await downloadFromServer();
    backlogTasks = JSON.parse(backend.getItem('tasks')) || [];
    boardArray = JSON.parse(backend.getItem('boardTasks')) || []; // Vom Backlog zum Board .

    document.getElementById('main').innerHTML = '';
    for (let i = 0; i < backlogTasks.length; i++) {
        const element = backlogTasks[i];

        document.getElementById('main').innerHTML += `
        <div class="ticked">
            <div id="${i}" class="showColor" onclick="addToBoard(${i})">
            </div>
            <div class="userimg" onclick="deleteFromBacklog(${i})">
                <img src="${element['userImage']}" alt="userlogo">
            </div>
            <div class="userinfo">
                <span class="username">${element['assignedTo']}</span>
                <span class="email">${element['userEmail']}</span>
            </div>
            <div class="category">
                <span>${element['category']}</span>
            </div>
            <div class="details">
                <span>${element['description']}</span>
            </div>
        
        </div> 
        `;
        checkForCategory(i);
    }
}

async function addToBoard(index) {
    const element = backlogTasks[index];

    let task = {
        'title': element['title'],
        'date': element['date'],
        'category': element['category'],
        'urgency': element['urgency'],
        'description': element['tidescriptionle'],
        'assignedTo': element['assignedTo'],
        'userImage': element['userImage'],
        'userEmail': element['userEmail']
    };

    boardArray.push(task);

    await backend.setItem('boardTasks', JSON.stringify(boardArray));

    deleteFromBacklog(index);
}


async function deleteFromBacklog(index) {
    backlogTasks.splice(index, 1);
    await backend.deleteItem('tasks');
    await backend.setItem('tasks', JSON.stringify(backlogTasks));
    renderBacklog();
}

function checkForCategory(i) {
    if (backlogTasks[i]['category'] == 'R&D') {
        document.getElementById(i).classList.add('green');
    }
    if (backlogTasks[i]['category'] == 'Purchasing') {
        document.getElementById(i).classList.add('red');
    }
    if (backlogTasks[i]['category'] == 'Management') {
        document.getElementById(i).classList.add('blue');
    }
    if (backlogTasks[i]['category'] == 'Controlling') {
        document.getElementById(i).classList.add('yellow');
    }
}