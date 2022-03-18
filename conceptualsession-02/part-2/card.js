const main = document.getElementById("main");

const searchbtn = () => {
    const input = document.getElementById("input-value");
    const error = document.getElementById("error");
    const inputValue = parseInt(input.value);


    if (isNaN(inputValue) || inputValue == "") {
        error.innerText = "Please Give a Number";


        input.value = " ";
        main.innerHTML = "";
    } else if (inputValue <= 0) {
        error.innerText = "Please Give a Positive Number"

        input.value = " ";
        main.innerHTML = "";
    } else {
        main.innerHTML = "";
        error.innerHTML = "";
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardsDisplay(data.cards))


        input.value = " ";
        error.innerHTML = "";
    }
}

const cardsDisplay = (cards) => {
    console.log(cards);
    for (const card of cards) {
        console.log(card.image);
        const div = document.createElement("div");
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.suit}</h5>
          <p class="card-text">${card.code}</p>
          <button class="btn btn-primary" type=""> See Details</button>
        </div>
      </div>
        `;
        main.appendChild(div);

    }
};