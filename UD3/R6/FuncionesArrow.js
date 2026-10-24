// 1. sum
const sum = (num1, num2) => num1 + num2;

// 2. stringLength (versión que solo escribe en consola)
const stringLength = (str) => {
    console.log(`the length of "${str}" is:`, str.length);
};

// 3. stringLength2 (versión que además devuelve la longitud)
const stringLength2 = (str) => {
    let length = str.length;
    console.log(`the length of "${str}" is:`, length);
    return str.length;
};

// 4. showAlert
const alerts = [
    "Hey, you are awesome",
    "You are so wonderful",
    "What a marvel you are",
    "You're so lovely",
    "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"
];

const showAlert = (name) => {
    alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
};

const presentacion = (name, age) => `Hello, I am ${name}, and I am ${age} years old.`;

const sumaArray = (numeros) => numeros.reduce((acumulado, n) => acumulado + n, 0);

let eye = "eye";
const fire = () => "bulls-";

const fibonacci = (n) => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};