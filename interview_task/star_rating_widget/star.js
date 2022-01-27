
import "./styles.css";


const root = document.querySelector("#app")

for(let i=0;i<5;i++){

  root.append(createStar(i))
  
}

const stars = document.getElementsByClassName('star')

for(const star of stars){

  star.addEventListener('mouseover',function(){
    // star.classList.contains("starSelected")?star.classList.remove("starSelected"):null
    var allElements = document.querySelectorAll(".starSelected");
   for(let i=0; i<allElements.length; i++)
   { 
    allElements[i].classList.remove('starSelected');
   }

   var elements = document.querySelectorAll(".clicked");
   for(let i=0; i<allElements.length; i++)
   { 
    elements[i].classList.remove('clicked');
   }
    for(let i=0;i<=parseInt(star.id);++i){
      document.getElementById(i).classList.add("starSelected")
    }
  })

  star.addEventListener('mouseout',function(){
    // star.classList.contains("starSelected")?star.classList.remove("starSelected"):null
    for(let i=parseInt(star.id);i>=0;--i){
        if(!document.getElementById(i).classList.contains('clicked')){
          document.getElementById(i).classList.remove("starSelected")
        }
    }
  })

  star.addEventListener('click',function(){
    // star.classList.contains("starSelected")?star.classList.remove("starSelected"):null
    for(let i=0;i<=parseInt(star.id);++i){

      document.getElementById(i).classList.add("clicked")
      document.getElementById(i).classList.add("starSelected")
    }
  })
  
}



function createStar(index){

  const ele = document.createElement("div")
  ele.className = 'star'
  ele.id = index

  return ele

}
