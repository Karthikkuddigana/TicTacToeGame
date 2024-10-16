let myList=[[1,0,0],[0,0,0],[0,0,0]]; 
console.log(myList); 
console.log(myList[1][1])
const resultList=[]
let temp3=""; 
let temp4=""; 
for(let i=0; i<myList.length; i++){
    let temp=""; 
    let temp2=""; 
    temp3+=myList[i][i]
    temp4+=myList[myList.length-1-i][i]
    for(let j=0; j<myList.length; j++){
        temp+=myList[i][j]; 
        temp2+=myList[j][i]; 
    }
    console.log(temp, temp2)
    resultList.push(temp); 
    resultList.push(temp2); 
}
// let tempLen=myList.length; 
// let i=0; 
// while(i<tempLen){
//     temp3+=myList[i][i]; 
//     i++
// }
// for(let k=0; k<myList.length; k++){ 
//     temp4+=myList[myList.length-1-k][k]
//     // console.log(myList.length-1-k,k); 

// }
resultList.push(temp3, temp4)
console.log(resultList); 
for( let i of resultList){
    if(i=="111"){
        console.log("1 wins")
        break; 
    }
    else if(i=="000"){
        console.log("0 wins") ;
    }
}
