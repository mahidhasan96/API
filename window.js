 const name = "mahid";
 function add(num1,num2){
    result = num1 + num2;
    console.log('inside the name', name);
    function double(num){
        return double * 2;
    }
    let total = double(result);
    return total;
}
console.log('out site name', name);
const output = add(100,200);
console.log(output);