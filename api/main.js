let news = []
// api : wGfzAvNFRelaYUuHM49xHXcTvnE96BG4HlLj1rbay4Y
const getLatestNews = async () => {
    let url = new URL( `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`);
    let header = new Headers({
        'x-api-key':'SIy6WLbl8tr76X8d5UzJR-uja01ZAfOl40FxlJgXL20'
    })
    let response = await fetch(url, {headers:header})
    let data = await response.json()
    console.log(data)
    news = data.articles
    console.log(news)


    render();
};

const render = () => {
    let newsHTML = '';
    newsHTML = news
    .map((news)=> {
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
    }).join('');


    document.getElementById("news-board").innerHTML = newsHTML
}
getLatestNews()