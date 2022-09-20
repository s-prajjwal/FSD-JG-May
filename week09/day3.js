const arr1 = [1,2,34,4,5,6]
let [count1,count2,count3] = ["", 0, true];

count1 = 5;
// console.log(count1, count2, count3);

const obj = {
    a: 1,
    b: "Hello",
    c: 2,
    d: 3,
    e: 4,
    f: {
        g: 10,
        h: 11
    },
    z: [1,2,3]
};


const {a: ab, c, e, f, z} = obj;
obj.z[2] = 7;


// console.log(z[2]);
// console.log(obj)



class i20 {
    printColor() {
        console.log(`${this.ownerName} has ${this.color} i20, which has ${this.alloyWheels ? "alloywheels": "no alloywheels"}`);
    }

    setColor(color) {
        this.color = color;
    }

    setOwnerName(ownerName) {
        this.ownerName = ownerName;
    }

}

const nitishCar = new i20();
// console.log(nitishCar)
// nitishCar.setOwnerName("Nitish");
nitishCar.setColor("Red");
// console.log(nitishCar)

nitishCar.color = "Green";
// console.log(nitishCar)


// nitishCar.mileage = 35;
// const shivCar = new i20("Shiv", "Blue");



// nitishCar.printColor();
// nitishCar.mileage = 25;
// console.log(nitishCar)
// console.log(shivCar)
// shivCar.printColor();


const arr = new Array(1,2,3,4);
const arr2 = [1,2,3,4]



class Assignment {
    constructor(createdAt, createdBy, questionLink) {
        this.assignmentName = null;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.questionLink = questionLink;
    }

    setAssignmentName(assignmentName) {
        this.assignmentName = assignmentName;
    }

    selectFile() {

    }
}

const assg1 = new Assignment("09-07-2022 07:48:41", "Prajjwal", "https://au-assignment.s3.ap-south-1.amazonaws.com/Week%208%20Day%205_%20Assignment-3d2a8a21-c515-45e8-9768-bfc208591d7c.pdf")
assg1.setAssignmentName("week-08 day-5");
const assg3 = new Assignment("","","","");
assg3.setAssignmentName("assignment 3");
console.log(assg3)
// console.log(assg1)


const assg2 = {
    assignmentName: "vsdv",
    createdAt: "cksdncl",
    createdBy: "cksdncls",
    questionLink: "cksdnclksdnc"
}
assg2.setAssignmentName("cnsdklcns");


