document.title='Anime'
const api={
    ApiRecentRelease:'https://gogoanime.consumet.org/recent-release',
    ApiMovie:'https://gogoanime.consumet.org/anime-movies',
    ApiTopMovie:'https://gogoanime.consumet.org/top-airing',
    ApiAction:'https://gogoanime.consumet.org/genre/action',
    ApiPopular:'https://gogoanime.consumet.org/popular'
}

function start(Api){
    getAnime(renderAinme,Api)
}
start(api.ApiMovie)

const tabList=document.querySelectorAll('.header-link--text')
tabList.forEach(tab=>{
    tab.addEventListener('click',e=>{
        // console.log(e.target)
        const type=e.target.getAttribute('type-list')
        let actives=document.querySelectorAll('.header-link--text.active')
        actives.forEach(active=>{
            active.classList.remove('active')
        })
        e.target.classList.add('active')
        console.log(type)
        start(api[type])
    })
})


function getAnime(callback,Api){
    fetch(Api)
        .then(function(response){
            return response.json()
        })
        .then(callback)
}

function renderAinme(animeList){
    // console.log(animeList)
    // console.log(animeList.animeImg)
    let listAnimeBlock= document.querySelector('#list-anime')
    let htmls = animeList.map(anime=>{
        return `
            <div class="anime-item">
                <a class="anime" href=${anime.episodeUrl}>
                    <div class="anime-img">
                        <img src="${anime.animeImg}" alt="">
                    </div>
                    <div class="anime-name">${anime.animeTitle}</div>
                    <div class="anime-sub">${'vietsub'}</div>
                </a>
            </div>
        `
    })
    listAnimeBlock.innerHTML=htmls.join('')
}