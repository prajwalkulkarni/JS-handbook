import "./styles.css";


const root = document.querySelector("#app")

for(let i=0;i<5;i++){

  root.append(createStar(i))
  
}

const stars = document.getElementsByClassName('star')

for(const star of stars){

  star.addEventListener('mouseover',function(){
    document.querySelector("#rating").innerHTML = "Rating:"
   var elements = document.querySelectorAll(".clicked");
  //  console.log(elements)
   for(let i=0; i<elements.length; i++)
   { 
    elements[i].classList.remove('clicked');
    elements[i].classList.remove('starSelected');
   }
    for(let i=0;i<=star.id;++i){
      

      document.getElementById(i).classList.add("starSelected")
    }
  })

  star.addEventListener('mouseout',function(){
    // star.classList.contains("starSelected")?star.classList.remove("starSelected"):null
    for(let i=star.id;i>=0;--i){
        if(!document.getElementById(i).classList.contains('clicked')){
          document.getElementById(i).classList.remove("starSelected")
        }
    }
  })

  star.addEventListener('click',function(){
    // star.classList.contains("starSelected")?star.classList.remove("starSelected"):null
    for(let i=0;i<=star.id;++i){

      document.getElementById(i).classList.add("clicked")
      document.getElementById(i).classList.add("starSelected")
    }

    document.querySelector("#rating").innerHTML = `Rating: ${+star.id+1}`
  })
  
}


function createStar(index){

  const ele = document.createElement("div")
  ele.className = 'star'
  ele.id = index

  return ele

}
