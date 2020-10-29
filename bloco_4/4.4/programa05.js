let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};

let info1 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dells's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for (let chave in info) {
    if (info[chave] === info1[chave]) {
        console.log("Ambas recorrentes")
    }else {        
    console.log(info[chave] + " e " + info1[chave]);
    }
}


        


