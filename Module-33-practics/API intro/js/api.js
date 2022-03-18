function loadData() {
    fetch("https://web.programming-hero.com/web-5/video/web-5-33-3-json-placeholder-get-data-display-data-on-ui")
        .then(response => response.json)
        .then(data => console.log(data))
}


function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUsers(data));

}


function displayUsers(data) {
    const ul = document.getElementById("users");
    // console.log(data);
    for (const user of data) {
        // console.log(user);
        const li = document.createElement("li");
        li.innerText = `name: ${user.name} , Email: ${user.email}`;
        ul.appendChild(li)
    }
}