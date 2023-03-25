const lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];

function addNewNames(...names) {
  for (let name of names) {
    if (typeof name !== "string") {
      console.log("Precisa ser String");
    } else if (lista.includes(name)) {
      console.log(name + " já existe");
    } else {
      lista.push(name);
    }
  }
  console.log(lista);
}

addNewNames("joao", "lara", 7, "Pedro");
