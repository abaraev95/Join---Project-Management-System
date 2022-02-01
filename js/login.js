
function login() {
    let username = document.getElementById('username-field').value;
    let password = document.getElementById('password-field').value;


    if (username === "test" && password === "test") {
        window.location.replace('http://www.google.com');
    } else {
        alert("You have successfully not logged in.");
    }
}
