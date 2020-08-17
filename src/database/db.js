//Primeiro precisa importar o modulo que eu vou usar
const dataBase = require("sqlite-async")

//Depois precisa abrir o banco de dados. E dentro do argumento vai a onde está o banco de dados. Mas esse arquivo não existe, porém quando eu rodo ele automaticamente esse arquivo é criado
//module.exports é uma propriedade que eu uso para exportar os dados do banco para outro arquivo(para fora), para fazer teste e outras coisas
module.exports = dataBase.open(__dirname + "/database.sqlite").then(execute) //Esse .then(.então) vai receber uma função. Quando o banco de dados abrir, então(then) execute (ai vem a função)

function execute(db){                                       //Na função eu passa um parametro(que eu chamei de db) essa parametro está me dando todo conteudo da linha de cima e se eu der um cosole.log(db) eu vou ver o que ele me retorna. Ele me retorna um objeto, e como todo objeto ele tem propriedades e eu vou usar a exec, e dentro do exec eu executo codigos sql
    //Criar as tabelas do banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}