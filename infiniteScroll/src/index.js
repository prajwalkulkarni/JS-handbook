

const container = document.querySelector('.container')




document.addEventListener('scroll',(event)=>{

  const scrollPos = window.scrollY

  const innerHeight = window.innerHeight

  if(scrollPos+innerHeight>=container.scrollHeight){
    const img = document.createElement('img')

    img.src = `https://random.imagecdn.app/${getRandom()}/150`

    container.appendChild(img)
  }
})

function getRandom(){

  return 400+Math.round(Math.random()*100);
}
