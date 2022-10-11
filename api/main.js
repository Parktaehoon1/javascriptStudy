let news = [];
let menus = document.querySelectorAll(".menu-list button");
menus.forEach((item) =>
  item.addEventListener("click", (event) => getNewsByTopics(event))
);
// api : wGfzAvNFRelaYUuHM49xHXcTvnE96BG4HlLj1rbay4Y
// const getLatestNews = async () => {
//   let url = new URL(
//     `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=2`
//   );
//   let header = new Headers({
//     "x-api-key": "vIG2Tk6V7yi_rqkaTLltKeJ7OLs_OMvsk75IZ81BG54",
//   });
//   let response = await fetch(url, { headers: header });
//   let data = await response.json();
//   console.log(data);
//   news = data.articles;
//   console.log(news);

//   render();
// };

const getNewsByTopics = (event) => {
  console.log("클릭됨", event.target.textContent);
  let topic = event.target.textContent.toLowerCase();
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=2${topic}`
  );
};

const render = () => {
  let newsHTML = "";
  newsHTML = news
    .map((news) => {
      return `<div class="news-list">
        <div class="news-img">
            <img class="news-img-size" src="${news.media}" alt="">
        </div>
        <div class="news-desc">
            <h2>${news.title}</h2>
            <p>
                ${news.summary}
            </p>
            <div>
                ${news.rights} * ${news.published_date}
            </div>
        </div>
    </div>`;
    })
    .join("");

  document.getElementById("news-board").innerHTML = newsHTML;
};
getLatestNews();
