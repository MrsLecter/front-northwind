const d = new Date();

console.log(d);

console.log(d.toTimeString().substring(0, 8));
console.log(d.toUTCString());
console.log(d.toLocaleTimeString().substring(0, 8));
