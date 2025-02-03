let i=11;
if(i%2 ==0){
    console.log("i est pair");
}else{
    console.log("i est impair")
}

i % 2 == 0 ? console.log("i est pair") : console.log("i est impair");

const a = ()=> {
    console.log("fonction a")
}

const b = ()=> {
    setTimeout(() => {
        console.log("Fonction b")
    }, 500000)
}

const c = ()=> {
    console.log("fonction c")
}
a()
b()
c()