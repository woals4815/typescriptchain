interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "Jayden",
    age: 25,
    gender: "Male"
};

const sayHi = (person: Human): string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};