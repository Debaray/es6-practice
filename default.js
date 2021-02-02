function add(num1,num2 = 20/*default value of num2*/)
{
    // if(num2 == undefined) {
    //     num2 = 0;
    // }
   // num2 = num2 || 20;//num2 or 20
;    return num1+num2;
}

const total = add(15,1000);
console.log(total);