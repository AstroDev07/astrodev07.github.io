let footer=document.getElementById('footer-text')

footer.innerHTML='Diego Enríquez<br/> Copyright© '+new Date().getFullYear()

let events=(id, url)=>{
  let obj=document.getElementById(id)
  obj.addEventListener('click', ()=>{
    window.open(url)
  })
}

events('degcodechannel', 'https://t.me/degcode')
events('twitterlink', 'https://www.x.com/astrodev0703')
events('personaltg', 'https://t.me/astrofficial')
events('mygithub', 'https://github.com/astrodev07')
events('ytchannel', 'https://youtube.com/@astrodev07')
events('emailink', 'mailto: diegoenriquezpuig07@gmail.com')

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

let changeLang=document.getElementById('change-lang')
changeLang.addEventListener('click',()=>{
  if(window.location=='https://astrodev07.github.io/es'){
    window.location='https://astrodev07.github.io/'
  }
  else{
    window.location='https://astrodev07.github.io/es'
  }
})