let news = []

const getLatestNews = async () => {
    let url = new URL( `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`);
    let header = new Headers({
        'x-api-key':'wGfzAvNFRelaYUuHM49xHXcTvnE96BG4HlLj1rbay4Y'
    })
    let response = await fetch(url, {headers:header})
    let data = await response.json()
    console.log(data)
    news = data.articles
    console.log(news)
}
getLatestNews()