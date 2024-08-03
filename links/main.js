let footer = document.getElementById('footer-text')
footer.innerHTML = 'Diego Enríquez<br/> Copyright© ' + new Date().getFullYear()
let events = (id, url) => {
  let obj = document.getElementById(id)
  obj.addEventListener('click', () => {
    window.open(url)
  })
}

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

let addLinks=(list, linksArray, namesArray)=>{
  let listElement=document.getElementById(list)
  for(let i=0; i<linksArray.length; i++){
    listElement.innerHTML+=`<li><a href="${linksArray[i]}">${namesArray[i]}</a></li>`
  }
}

let cssNamesArray=['CSS Gradient', 'CSS Loaders', 'CSS Tricks']
let cssLinksArray=['https://cssgradient.io/', 'https://css-loaders.com/', 'https://css-tricks.com/']
addLinks('css-items-lists', cssLinksArray, cssNamesArray)

let jsNamesArray=['Learn JavaScript Online', 'JavaScript Info', 'JavaScript DevDocs']
let jsLinksArray=['https://learnjavascript.online/', 'https://javascript.info/', 'https://devdocs.io/javascript/']
addLinks('js-items-links', jsLinksArray, jsNamesArray)