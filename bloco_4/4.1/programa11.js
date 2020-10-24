let salarioBruto = 2000;
let aliquota_INSS;
let salario_Base;
let aliquota_IR;

if (salarioBruto <= 1556.94){
    aliquota_INSS = salarioBruto * 0.08
} else if (salarioBruto <= 2594.92){
    aliquota_INSS = salarioBruto * 0.09
} else if (salarioBruto <= 5189.82){
    aliquota_INSS = salarioBruto * 0.11
} else {
    aliquota_INSS = 570.88
}

salario_Base = salarioBruto - aliquota_INSS
console.log(salario_Base)


if (salario_Base <= 1903.98){
    aliquota_IR = 0
} else if (salario_Base <= 2826.55){
    aliquota_IR = salario_Base * 0.075 - 142.80
} else if (salario_Base <= 3751.05){
    aliquota_IR = salario_Base * 0.15 - 354.80
} else if (salario_Base <= 4664.68){
    aliquota_IR = salario_Base * 0.225 - 636,13
} else {
    aliquota_IR = salario_Base * 0.275 - 869,36
}

salario_Liquido = salario_Base - aliquota_IR
console.log(salario_Liquido)