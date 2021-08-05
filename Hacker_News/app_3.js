// 페이징 구현하기

const container = document.getElementById('root')
const ajax = new XMLHttpRequest()
const content = document.createElement('div')
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'
const store = {
  currentPage: 1,
}

// ajax를 이용하여 url의 데이터 가져오기
function getData (url) {
  ajax.open('GET', url, false)
  ajax.send()
  return JSON.parse(ajax.response)
}

// newsFeed를 만드는 함수, html 구조를 만듬, array로 만들어서 마지막에 innerHTML으로 array의 elements를 join하여 넣음
function newsFeed() {
  const newsFeed = getData(NEWS_URL)
  const newsList = []
  console.log(newsFeed)

  newsList.push('<ul>')
  for (let i = (store.currentPage-1)*10; i < store.currentPage*10; i++) {
    newsList.push(`
      <li>
        <a href = "#/show/${newsFeed[i].id}">
          ${newsFeed[i].title} (${newsFeed[i].comments_count})
        </a>
      </li>
    `)
  }
  newsList.push('</ul>')
  
  newsList.push(`
    <div>
      <a href="#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}">이전 페이지</a>
      <a href="#/page/${store.currentPage + 1}">다음 페이지</a>
    </div>
  `)

  container.innerHTML = newsList.join('') // overwrite
}

// 클릭시 (해쉬가 바뀔 경우)보여줄 화면, index.html에 선언된 div태그인 container의 내용을 바꿈 
function newsDetail() {
  const id = location.hash.substr(7)
  const newsContent = getData(CONTENT_URL.replace('@id', id))
  // const title = document.createElement('h1')

  container.innerHTML = `
    <h1>${newsContent.title}</h1>

    <div>
      <a href="#/page/${store.currentPage}">목록으로</a>
    </div>
  `
}

// 사용자가 선택한 해쉬에 따라 보여주는 화면을 전환하는 함수
function router() {
  const routePath = location.hash //location.hash에 #만 들어가 있으면 빈 문자열을 반환함.

  if (routePath === '') {
    newsFeed()
  } else if (routePath.indexOf('#/page/') >= 0){
    store.currentPage = Number(routePath.substr(7))
    newsFeed()
  } else {
    newsDetail()
  }
}

// 브라우저에서 event가 일어나면 router를 실행
window.addEventListener('hashchange', router)

router()