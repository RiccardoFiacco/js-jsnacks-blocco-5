const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
function isEven(num){
    if(num%2==0){
        return true;
    }
}

const arrEven = nums.filter(isEven);
console.log(arrEven)

//second solution
let arrEvenv2 = [];
nums.forEach(el=>{
    if(isEven(el)){
        arrEvenv2.push(el)
    }
})
console.log(arrEvenv2)

