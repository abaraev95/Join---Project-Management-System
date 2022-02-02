let backlogArray = [{
        'color': 'green',
        'userimg': './img/user/georg.jpg',
        'username': 'Georg Straßberger',
        'useremail': 'georg.strassberger@gmail.com',
        'category': 'Marketing',
        'details': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        'color': 'red',
        'userimg': './img/user/element-fire.png',
        'username': 'Max Mustermann',
        'useremail': 'm.maustermann@gmail.com',
        'category': 'Sale',
        'details': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        'color': 'yellow',
        'userimg': './img/user/element-electro.png',
        'username': 'Hans P. Bexter',
        'useremail': 'hp.bexter@gmx.de',
        'category': 'Design',
        'details': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        'color': 'blue',
        'userimg': './img/user/element-water.png',
        'username': 'Julia Nurso',
        'useremail': 'julia.nurso@hotmail.de',
        'category': 'Product',
        'details': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    }
];

function renderBacklog() {
    document.getElementById('main').innerHTML = ``;
    for (let i = 0; i < backlogArray.length; i++) {
        const element = backlogArray[i];
        document.getElementById('main').innerHTML += `
        <div class="ticked">
            <div class="showColor ${element['color']}">
            </div>
            <div class="userimg">
                <img src="${element['userimg']}" alt="userlogo">
            </div>
            <div class="userinfo">
                <span class="username">${element['username']}</span>
                <span class="email">${element['useremail']}</span>
            </div>
            <div class="category">
                <span>${element['category']}</span>
            </div>
            <div class="details">
                <span>${element['details']}</span>
            </div>
        </div>
        `;

    }
}