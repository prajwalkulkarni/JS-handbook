import "./styles.css";

const root = document.querySelector("#app")
root.style.height = '400px'
  root.style.width = '400px'
  root.style.border = 'thick solid #000000'

let arr = new Array(8)

let record = []

for(let i=0;i<8;++i){
  arr[i] = new Array(8)
}
let initial = 'black'
for(let i=0;i<8;i++){
  for(let j = 0;j<8;++j){
    initial = initial==='white'?'black':'white'

    arr[i][j] = {
      coordDOM:getBox(initial,`${i},${j}`),
      coordinates:[i,j],
      bottomLeft: j>0&&i<7?[i+1,j-1]:null,
      bottomRight:j<7&&i<7?[i+1,j+1]:null,
      topLeft:j>0&&i>0?[i-1,j-1]:null,
      topRight:i>0&&j<7?[i-1,j+1]:null
    }
    root.append(arr[i][j].coordDOM)
  }
  // root.append("\n")
  initial = initial==='white'?'black':'white'
}

const boxes = document.querySelectorAll("#app div")

root.addEventListener('click',(event)=>{
  event.stopPropagation()
})
document.body.addEventListener('click',()=>{
  record.forEach(DOMBlock=>
    DOMBlock[0].style.backgroundColor = DOMBlock[1])
})

boxes.forEach(box=>box.addEventListener('click',
function(event){
  const coords = box.attributes[0].value.split(',').map(val=>parseInt(val))
  const clickBox = arr[coords[0]][coords[1]]

  record.forEach(DOMBlock=>
    DOMBlock[0].style.backgroundColor = DOMBlock[1])
  record = []
  diagonalRed(clickBox)
  // console.log(arr[coords[0]][coords[1]].bottomLeft,arr[coords[0]][coords[1]].bottomRight)
}))



function diagonalRed(surround){


  let bLeft = surround.bottomLeft
  let bRight = surround.bottomRight
  let tLeft = surround.topLeft
  let tRight = surround.topRight

  // console.log(root.children)
  // const block = root.querySelector(`#${surround.coordinates[0]},${surround.coordinates[1]}`)
  // block.replaceWith(getBox('red',`${surround.coordinates[0]},${surround.coordinates[1]}`))
  record.push([document.getElementById(`${surround.coordinates[0]},${surround.coordinates[1]}`),document.getElementById(`${surround.coordinates[0]},${surround.coordinates[1]}`).style.backgroundColor])
  document.getElementById(`${surround.coordinates[0]},${surround.coordinates[1]}`).style.backgroundColor = 'red' 
  while(bLeft!==null){
    // console.log(bLeft)
    const block = document.getElementById(`${bLeft[0]},${bLeft[1]}`)

    record.push([block,block.style.backgroundColor])
    block.style.backgroundColor = 'red'
    bLeft = arr[bLeft[0]][bLeft[1]].bottomLeft

  }
  while(bRight!==null){
    // console.log(bRight)
    const block = document.getElementById(`${bRight[0]},${bRight[1]}`)
    record.push([block,block.style.backgroundColor])
    block.style.backgroundColor = 'red'
    bRight = arr[bRight[0]][bRight[1]].bottomRight
    
  }
  while(tLeft!==null){
    // console.log(tLeft)
    const block = document.getElementById(`${tLeft[0]},${tLeft[1]}`)
    record.push([block,block.style.backgroundColor])
    block.style.backgroundColor = 'red'
    tLeft = arr[tLeft[0]][tLeft[1]].topLeft
    
  }
  while(tRight!==null){
    // console.log(tRight)
    const block = document.getElementById(`${tRight[0]},${tRight[1]}`)
    record.push([block,block.style.backgroundColor])
    block.style.backgroundColor = 'red'
    tRight = arr[tRight[0]][tRight[1]].topRight
    
  }
  


}
function getBox(color,coord){
  const box = document.createElement("div")
  box.id = coord
  box.style.height='50px'
  box.style.padding = '0px'
  box.style.margin = '0px'
  box.style.width='50px'
  box.style.display = 'inline-block'
  box.style.backgroundColor = color

return box
}

