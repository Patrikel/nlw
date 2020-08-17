const subjects = [
    "Artes",
    "Biologia",
    "Ciência",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feita",
    "Sábado",
]

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1                   //Lembrando que o subjects começa na posição 1 por isso estou diminuindo uma posição dele com essa expressão Porque na hora em que for buscar os dados no subjects eles começam na posição 0, por isso preciso fazer isso. O + antes do subjectNumber me garante que ele está pegando um numero do subject
    return subjects[arrayPosition]                            //A função vai me retornar um subject na arrayPosition 
}                                                             //E quando eu vou usar essa função? Quando eu estiver preparando os dados lá em baixo para saber se realmente existe valor nos campos digitados

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":")                   //Separando com a propriedade split horas e minutos. Assim ele vai me devolver um array com a hora na posição 0 e os minutos na posição 1 (Esses dados vem em string)
    return Number((hour * 60) + minutes)
}

//Vou exportar esses objetos
module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}