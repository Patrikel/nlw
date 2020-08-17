// Lugar a onde terá toda lógica de inserir os professores no banco de dados

//Sempre vou precisar exportar meus arquivos e para isso eu uso (module.exports). Nisso eu vou executar uma função. Essa função vai receber o banco de dados e um objeto, e nesse objeto ele precisar ter outros objetos que eu passei dentro dele
module.exports = async function(db, {proffyValue, classValue, classScheduleValues}){
    //Inserir dados na table de proffys. Nessa logica de inserir dados demora um tempo também. Quando eu rodar a inserção eu vou ter que esperar um tempo até executar a outra tarefa. para isso existe uma palavrinha no js que faz esperar aquele processo acabar para ir para a proxima linha, nessa caso a palavra é await (mas para eu usar um await dentro de uma função eu preciso colocar antes do no me da função a palavra async)
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    //Inserir dados na tabela classes

    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID

    //Inserir dados na tabela class_schedule.Mas aqui vamos ter um problema que é.. O professor pode cadastrar varios horários para dar aula. Nessa caso eu devo usar uma estrutura de repetição. Nesse caso eu vou uesar o mapa pois ele me retorna os valores agrupados em um array
    const insertedAllClassScheduleValues = classScheduleValues.map( (classScheduleValue) => {   //Cada vez que essa função rodar ela vai estar se referindo a um valor do classScheduleValues(desse array de objetos)
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })
        
    
    //Aqui vou executar todos os "db.runs()" das class_schudules
    await Promise.all(insertedAllClassScheduleValues)                     //Aqui vai esperar todos os db.runs e vai pegar o array de muitas "promessas de execução (É uma promessa pq pode dar algum erro)" e no caso quem tem esses arrays é insertedAllClassScheduleValues
}





//Depois vou chamar essa mesma função lá "test.js"