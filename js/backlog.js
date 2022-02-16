let boardArray = []; // Objecte zum Bord übergeben.


function renderBacklog() {
    document.getElementById('main').innerHTML = ``;
    for (let i = 0; i < backlogTasks.length; i++) {
        const element = backlogTasks[i];

        console.log('element: ', element);

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


function deleteFromBacklog(index) {
    backlogTasks.splice(index, 1);
    renderBacklog();
}