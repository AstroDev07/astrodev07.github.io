let footer = document.getElementById('footer-text')
footer.innerHTML = 'Diego Enríquez<br/> Copyright© ' + new Date().getFullYear()
let events = (id, url) => {
  let obj = document.getElementById(id)
  obj.addEventListener('click', () => {
    window.open(url)
  })
}
events('personal-site', 'https://astrpdev07.github.io/')
events('article-link', 'https://dev.to/giteden/monorepo-vs-polyrepo-j9')
let changeMode = document.getElementById('change-mode')
changeMode.addEventListener(
  'click',
  () => {
    if (document.body.className == 'dark-mode') {
      document.body.className = 'white-mode'
      changeMode.innerHTML = 'Dark Mode'
    } 
    else {
      document.body.className = 'dark-mode'
      changeMode.innerHTML = 'White Mode'
    }
  }
)
