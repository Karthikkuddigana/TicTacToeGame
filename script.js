let myList=[["","",""],["","",""],["","",""]]; 
const dialog=document.querySelector("#WinnerDialog")
const winnerDisplay=document.querySelector("dialog span"); 
const closeButton=document.getElementById("DialogClose"); 
closeButton.addEventListener("click",()=>{
    dialog.close(); 
    location.reload(); 
} )
console.log(dialog); 
function checkArray(currList){
    const resultList=[]
    let temp3=""; 
    let temp4=""; 
    for(let i=0; i<currList.length; i++){
        let temp=""; 
        let temp2=""; 
        temp3+=currList[i][i]
        temp4+=currList[currList.length-1-i][i]
        for(let j=0; j<currList.length; j++){
            temp+=currList[i][j]; 
            temp2+=currList[j][i]; 
        }
        // console.log(temp, temp2)
        resultList.push(temp); 
        resultList.push(temp2); 
    }
    resultList.push(temp3, temp4)
    console.log(resultList); 
    for( let i of resultList){
        if(i=="xxx"){
            console.log("1 wins")
            winnerDisplay.textContent="x wins"; 
            dialog.show(); 
            return "x wins"; 
        }
        else if(i=="ooo"){
            console.log("0 wins") ;
            winnerDisplay.textContent="o wins"; 
            dialog.show(); 
            return "o wins"
        }
    }
}

let currentPlayer="x"
// let clickedItems=new Array(); 
const buttonList=document.querySelectorAll(".flex-container-inline div"); 
// console.log(buttonList)
for(let ele of buttonList){
    ele.addEventListener('click',(e)=>{
        // console.log(e.target.innerHTML)
        if(e.target.innerHTML!="x" && e.target.innerHTML!="o"){
            let temp={}; 
            let parentElement=ele.closest("div[rowIndex]"); 
            temp.row=parentElement.getAttribute("rowIndex"); 
            temp.col=ele.getAttribute("colIndex"); 
            e.target.innerHTML=currentPlayer; 
            myList[temp.row][temp.col]=currentPlayer; 
            checkArray(myList); 
            currentPlayer=(currentPlayer=="x")?"o":"x"; 
            // clickedItems.push(temp); 
            // console.log(clickedItems); 
            console.log(myList); 
        }
    })
}
