let menus = document.querySelectorAll(".menu-list button");
console.log(menus);

menus.forEach((item) =>
  item.addEventListener("click", (event) => getFoodByTopics(event))
);

const getLatestfood = async () => {
  let url = new URL(
    `https://api.edamam.com/api/recipes/v2?type=public&q=bulgogi&app_id=d232b022&app_key=18c85995b5bccd69f64452bf8de8924a`
  );

  // let header = new Headers({
  //   q: "bulgogi",
  //   "api-id": "d232b022",
  //   "api-key": "18c85995b5bccd69f64452bf8de8924a",
  // });
  // let response = await fetch(url, { headers: header });
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  recipe = data.hits;
  console.log("recipe", recipe);
  console.log("digest", recipe[0].recipe.digest);
  digest = recipe[0].recipe.digest;
  console.log(digest);
  for (let i = 0; i < recipe.length; i++) {
    // console.log("label", recipe[i].recipe.digest[0].label);
    for (let j = 0; j < digest.length; j++) {
      // console.log("label", recipe[i].recipe.digest[j].label);
      // index = recipe[i].recipe.digest[j].label;
    }
  }
  render();
};

const getFoodByTopics = async (event) => {
  console.log("클릭됨", event.target.textContent);
  let topic = event.target.textContent;
  let url = new URL(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${topic}&app_id=d232b022&app_key=18c85995b5bccd69f64452bf8de8924a`
  );
  let response = await fetch(url);
  let data = await response.json();
  console.log("newurl", data);
  recipe = data.hits;
  render();
};

const render = () => {
  let foodHTML = "";
  let foodArr = [];
  foodArr = recipe.map((item) => {
    let tag = `<div class="food-list">
        <div class="food-img">
            <img class="food-img-size" src="${item.recipe.image}" alt="">
        </div>
        <div class="food-desc">
            <h2>${item.recipe.label}</h2>
            <p>
                식사 타입 : ${item.recipe.dishType}
            </p>
            <p>
                추천 시간 : ${item.recipe.mealType}
            </p>
            <div>
                재료 : ${item.recipe.ingredientLines}
            </div>

            <div>
                영양성분 :`;

    // 상세정보
    let disgestTotal = item.recipe.digest.length;
    let disgestHtml = "";
    for (let i = 0; i < disgestTotal; i++) {
      let obj = item.recipe.digest[i];
      disgestHtml += `${obj.label}: ${Math.floor(obj.total)} ${obj.unit}`;
    }
    tag += disgestHtml;

    let digetstArr = item.recipe.digest.map((digestItem) => digestItem);

    // 마무리 코드
    tag += `</div>
            <div>
                총 영양성분 : ${Math.floor(item.recipe.totalWeight)} cal
            </div>
            <a href="${item.recipe.url}" target='_blank'>레시피 보러가기</a>
        </div>
    </div>`;
    return tag;
  });

  foodHTML = foodArr.join("");
  document.getElementById("food-board").innerHTML = foodHTML;
};

getLatestfood();
