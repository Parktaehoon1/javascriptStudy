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

const getFoodByKeyword = async () => {
  // 검색 키워드 읽어오기
  // url에 검색 키워드 붙이기
  // header 준비
  // url 부르기
  // 데이터 가져오기
  // 데이터 보여주기

  let keyword = document.getElementById("search-input").value;
  console.log(keyword);
  let url = new URL(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=d232b022&app_key=18c85995b5bccd69f64452bf8de8924a`
  );
  let response = await fetch(url);
  let data = await response.json();
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
    // for (let i = 0; i < disgestTotal; i++) {
    //   let obj = item.recipe.digest[i];
    //   disgestHtml += `${obj.label}: ${Math.floor(obj.total)} ${obj.unit}`;
    // }
    // tag += disgestHtml;

    let digetstArr = item.recipe.digest.map((digestItem) => {
      disgestHtml += `${digestItem.label}: ${Math.floor(digestItem.total)} ${
        digestItem.unit
      }`;
    });
    tag += disgestHtml;
    // 마무리 코드
    tag += `</div>
            <div>
                총 영양성분 : ${Math.floor(item.recipe.totalWeight)} cal
            </div>
            <a href="${
              item.recipe.url
            }" target='_blank' class="recipe-btn">레시피 보러가기</a>
        </div>
    </div>`;
    return tag;
  });

  foodHTML = foodArr.join("");
  document.getElementById("food-board").innerHTML = foodHTML;
};

getLatestfood();

let searchBtn = document.getElementById("search-btn");
console.log("버튼", searchBtn);
searchBtn.addEventListener("click", getFoodByKeyword);

let appearBtn = document.querySelector(".appear-btn");
console.log("appearbtn", appearBtn);
let showBtn = document.querySelector(".show-btn");
console.log("showbtn", "show-btn");

let searchInputShow = () => {
  console.log("클릭");
  showBtn.style.opacity = "1";
  appearBtn.style.display = "none";
};
appearBtn.addEventListener("click", searchInputShow);
