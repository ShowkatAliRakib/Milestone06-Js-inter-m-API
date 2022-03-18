document.getElementById("add-border").addEventListener("click", function() {
    const container = document.getElementById("friend-container");
    container.style.border = "3px solid yellow";
})

const friends = document.getElementsByClassName("friend");
for (const friend of friends) {
    friend.style.backgroundColor = "re";
}

document.getElementById("add-Friend").addEventListener("click", function() {
    const container = document.getElementById("friend-container");
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML - `
     <h3 class="
    friend - name "> New Friend <
    /h3> <
    p > Unde consequatur impedit dolores recusandae ? < /p>`;
    container.appendChild(friendDiv);
})