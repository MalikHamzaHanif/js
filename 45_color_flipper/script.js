const simpleColors = ["red", "blue", "green", "orange", "purple", "cyan", "magenta", "yellow", "teal", "indigo"];
let activeColors = [];

const btnOne = document.getElementsByTagName("button")[0];
const btnTwo = document.getElementsByTagName("button")[1];
const btnThree = document.getElementsByTagName("button")[2];
const colorBox = document.getElementById("color-box")
btnOne.onclick = () => {
    activeColors = simpleColors;
    colorBox.style.backgroundColor = simpleColors[0]
    colorBox.firstElementChild.lastElementChild.innerHTML = simpleColors[0]
}
btnTwo.onclick = () => {
    activeColors = [];
    console.log(activeColors.length);
    
}
btnThree.onclick = () => {
    if (activeColors.length <= 0) {
    //   let rgbValueOne=Math.floor(Math.random()*255);
    //   let rgbValueTwo=Math.floor(Math.random()*255);
    //   let rgbValueThree=Math.floor(Math.random()*255);
    //   colorBox.style.backgroundColor = `rgb(${rgbValueOne},${rgbValueTwo},${rgbValueThree})`
    //   colorBox.firstElementChild.lastElementChild.innerHTML = `rgb(${rgbValueOne},${rgbValueTwo},${rgbValueThree})`
    
    let hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let color='';
    for(let i=0;i<6;i++){
        let pickColor=Math.floor(Math.random()*hex.length);
        color+=hex[pickColor];
    }
      colorBox.style.backgroundColor = "#"+color;
      colorBox.firstElementChild.lastElementChild.innerHTML = "#"+color;


    } else {
        const pickColor = Math.floor(Math.random() * activeColors.length);
        colorBox.style.backgroundColor = activeColors[pickColor]
        colorBox.firstElementChild.lastElementChild.innerHTML = activeColors[pickColor]

 
    }
}
