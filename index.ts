const name = "Jayden",
    age= 25,
    gender= "Male";

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}. You are ${age}years old. And you are ${gender}`);
}

sayHi(name, age);

export {};