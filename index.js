const categories = document.querySelectorAll("summary__category");
const scores = document.querySelectorAll(".summary__score");
const icons = document.querySelectorAll(".summary__icon");

fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Couldn't fetch data");
    }

    return response.json();
  })
  .then((data) => handleData(data))
  .catch((error) => console.error(error));

function handleData(data) {
  const summaryParent = document.querySelector(".summary");

  let output = "";
  output += `<h3 class="summary__heading">Summary</h3>`;

  data.forEach((i) => {
    output += `
    
    <div class="summary__box ${i.color}">
    <img
      class="summary__icon"
      src="${i.icon}"
      alt="icon for ${i.category} category"
    />
    <h4 class="summary__category">${i.category}</h4>
    <p class="summary__score">
    ${i.score} <span class="summary__score-of">/ 100</span>
    </p>
  </div>
  `;
  });

  output += `<button class="summary__button">Continue</button>`;

  summaryParent.innerHTML = output;
}
