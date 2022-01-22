import "./styles.css";




const root = document.querySelector("#app")


let arr = new Array(8)

for(let i=0;i<8;++i){
  arr[i] = new Array(8)
}
let initial = 'black'
for(let i=0;i<8;i++){
  for(let j = 0;j<8;++j){
    initial = initial==='white'?'black':'white'

    arr[i][j] = getBox(initial,`${i},${j}`)
    root.append(arr[i][j])
  }
  root.append("\n")
  initial = initial==='white'?'black':'white'
}

const boxes = document.querySelectorAll("#app div")

boxes.forEach(box=>box.addEventListener('click',
function(event){
  const coords = box.attributes[0].value.split(',').map(val=>parseInt(val))
  console.log(coords)
}))



function diagonalRed(currCoord){
  const [x,y] = currCoord
  const toRed = []
  toRed.push([x,y])
  for(let i =0;i<7;++i){
    
  }

  


}
function getBox(color,coord){
  const box = document.createElement("div")
  box.id = coord
  box.style.height='50px'
  box.style.width='50px'
  box.style.display = 'inline-block'
  box.style.backgroundColor = color

return box
}
