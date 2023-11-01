import data from "./data.json" assert { type: "json" }; //This allows you to tell the browser that you are importing a json file -> stackoverflow

const stats = document.querySelector(".stats");

data.map((obj) => {
  stats.innerHTML += `<div class="info-card ${obj.category.toLowerCase()}">
    <div class="left">
    <img class="icon" src="${obj.icon}"/>
      <span class="category">${obj.category}</span>
    </div>
    <div class = "right">
      <span class="score">${
        obj.score
      }</span><span class="slight-transparent"> /100</span>
    </div>
  </div>`;
});
