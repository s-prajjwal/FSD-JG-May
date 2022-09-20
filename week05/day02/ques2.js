let str = "don’t know why";

let count = 0; // counting number of 'y's in your string
for (let i=0;i<str.length; i++) {
    if(str[i] === 'y') {
        console.log("yes");
        count++;
        break;
    }
}
if(count === 0) {
    console.log("no")
}
