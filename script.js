let myList=[[0,1,1],[0,0,1],[1,0,0]]; 
console.log(myList); 
console.log(myList[1][1])
for(let i=0; i<myList.length; i++){
    let temp=""; 
    let temp2=""; 
    for(let j=0; j<myList.length; j++){
        temp+=myList[i][j]; 
        temp2+=myList[j][i]; 
    }
    console.log(temp, temp2)
}
let temp3=""; 
let temp4=""; 
let tempLen=myList.length; 
let i=0; 
while(i<tempLen){
    temp3+=myList[i][i]; 
    i++
}
for(let k=0; k<myList.length; k++){ 
    temp4+=myList[myList.length-1-k][k]
    // console.log(myList.length-1-k,k); 

}
console.log(temp3); 
console.log(temp4); 
