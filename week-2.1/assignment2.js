//sum to N number given in funnction
function test(n){

    let p= 0;
    for( let i=1; i<=n; i++){

        p= p + i ;
         
    }
    return p;

}

let number = 4;
let x=test(number);
console.log("result = "+ x);
