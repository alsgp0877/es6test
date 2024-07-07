let obj = { name: "John", age: 30, city: "New York"};
Object.keys(obj).forEach((key) => {
    console.log(`${key}: ${obj[key]}`);
});