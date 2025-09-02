function greet(user){

    let prefix=user.gender === "male" ? "Mr. " : "Ms./Mrs. ";
    
    console.log("Hello " + prefix + ""+ user.name+  " your age is " + user.age);
    if (user.age >=18){
        console.log("you can vote");
    }
    else{
        console.log("You cannot vote");
    }




    if( person.gender == "male" && person.age>=18){

        console.log("Hi Mr. " + person.name + " your age is " + person.age);
        console.log("you can vote");

    } else if( person.gender == "female" && person.age>=18){
        console.log("Hi Ms./Mrs. " + person.name + " your age is " + person.age);
        console.log("you can vote");
    } else if( person.gender == "male" && person.age<18){
        console.log("Hi Mr. " + person.name + " your age is " + person.age);
        console.log("you cannot vote");
    } else if(person.gender == "female" && person.age<18){
        console.log("Hi Ms./Mrs. " + person.name + " your age is " + person.age);
        console.log("you cannot vote");
    }




    if(person.gender=="male" && ){
        console.log("Hi Mr. " + person.name + " your age is " + person.age);
    } 
    
    else if( person.gender == "female"){
        console.log("Hi Ms./Mrs. " + person.name + " your age is " + person.age);

    } else{
        console.log("Hi Mr./Ms./Mrs. " + person.name + " your age is " + person.age);
    }
   

}

let person1={
    name : "harkirat",
    age : 15,
    gender : "male",
    city : "dehli"
}

let person2={
    name : "sonal",
    age : 17,
    gender : "female",
    city : "punjab"
}

let person3={
    name : "shaikh",
    age : 22,
    gender : "male",
    city : "pune"
}



greet(person1);
greet(person2);
greet(person3);