const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = {
  lesson1, 
  lesson2, 
  lesson3
}

Object.assign(allLessons, lesson1, lesson2, lesson3)
console.log(allLessons)

function totalEstudantes(obj){
  
}