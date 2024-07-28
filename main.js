let footer=document.getElementById('footer-text')

footer.innerHTML='Diego Enríquez<br/> Copyright© '+new Date().getFullYear()

let degcode=document.getElementById('degcodechannel')
degcode.addEventListener('click', ()=>{
  window.open('https://t.me/degcode')
})

let twitter=document.getElementById('twitterlink')
twitter.addEventListener('click', ()=>{
  window.open('https://www.x.com/astrodev0703')
})

let telegram=document.getElementById('personaltg')
telegram.addEventListener('click', ()=>{
  window.open('https://t.me/astrofficial')
})

let github=document.getElementById('mygithub')
github.addEventListener('click', ()=>{
  window.open('https://github.com/astrodev07')
})

let youtube=document.getElementById('ytchannel')
youtube.addEventListener('click', ()=>{
  window.open('https://youtube.com/@astrodev07')
})

let email=document.getElementById('emailink')
email.addEventListener('click', ()=>{
  window.open('mailto:diegoenriquezpuig07@gmail.com')
})

let changeMode=document.getElementById('change-mode')
changeMode.addEventListener('click', ()=>{
  
  if(document.body.className=='dark-mode'){
    document.body.className='white-mode'
    changeMode.innerHTML='Dark Mode'
  }
  else{
    document.body.className='dark-mode'
    changeMode.innerHTML='White Mode'
  }
  
})