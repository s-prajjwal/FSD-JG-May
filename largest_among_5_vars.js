// take 5 variables and print out the largest one
// 5 ifs

let num1=500;
let num2=20;
let num3=1;
let num4=80;
let num5=200;

if(num1>num2) {
    if(num1>num3){
        if(num1>num4) {
            if(num1>num5){
                console.log("num1 is largest")
            }
        }
    }
} else if(num2>num3){
    if(num2>num4){
        if(num2>num5){
            console.log("num2 is largest")
        }
    }
}
else if(num3>num4) {
    if(num3>num5){
        console.log("num3 is ;argest")
    }
}
else if(num4>num5){
    console.log("num4 is largest")
}
else {
    console.log("num5 is largest")
}

if(num1>num2&&num1>num3&&num1>num4&&num1>num5){
    console.log("num1 is largest")
} else if(num2>num3&&num2>num4&&num2>num5) {
    console.log("num1 is largest")
} else if(num3>num4&&num3>num5)
