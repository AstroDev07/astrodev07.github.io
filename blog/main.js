let footer = document.getElementById('footer-text')
footer.innerHTML = 'Diego Enríquez<br/> Copyright© ' + new Date().getFullYear()

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
