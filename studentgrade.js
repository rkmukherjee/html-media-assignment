var marks=76
if(marks>90){
    console.log("Your grade is A");
}
else if(marks<=90 && marks>=70){
    console.log("Your grade is B");
}
else if(marks<70 && marks>=50){
    console.log("Your grade is C");
}
else if(marks<50){
    console.log("Your grade is F");
}
else {
    console.log("Wrong marks");
}