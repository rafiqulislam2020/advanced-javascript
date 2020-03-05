let bonus = 30;
function sum (first, second){
    let result = first + second + bonus;
    if(result> 9){
        const mood = " i am happy";
        console.log(mood);
    }
    return result;
    
}
const output = sum(5, 8);
console.log(output);