const names = ["alice", "bob", "charlie", "danielle"];
const newNames = names.map(name => name[0].toUpperCase() + name.slice(1));
console.log(newNames);