const liste1 = []
const var1 = 0
const var2 = {
    actif: true,
    ident:"S33-12B",
    position: [45.61835861911019, -73.60698829870468]
}

if (liste1.length == 0) {
    console.log("la liste1 est vide")
}


if (var1 == 0) {
    console.log("var1 vaut 0")
} else {
    console.log("var1 est différent de 0")
}

if (var1 == 0) {
    var2.position = []
}


if (var2.actif) {
    liste1.push(1)
} else {
    liste1.push(0)
}