//Servidor
const express = require("express")              //para rodar meu servidor express eu preciso fazer um require("express")()  eu estou pedindo meu servidor express para executar, pois é uma função por isso tem os parenteses do lado de fora
const server = express()                        //Depois eu coloco o listen (ouço) e o servidor vai sempre "ouvir" na porta 5500. Despois de escrever essa sintax eu abro meu terminar eu dou o seguinte comando => node src/server.js <= Eu estou rodando meu servidor na pasta src/server.js.  Quando eu rodar isso ele vai apararecer na minha pagina cannot get (não posso pegar). Meu servidor vai estar rodando mas não vai saber as rotas. E para isso eu vou definir no .get

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")

// configurar nunjucks  (template engine)       //Estou usando o nunjucks para renderizar minhas páginas e dar "poder para o html". Agora eu posso pegar o meu objeto proffys e colocar lá no hatml com a tag <h1>{{proffys}}</h1
const nunjucks = require('nunjucks')            //Interação com o HTML vai ser toda por Template Engine e o nunjucks vai fazer isso pra gente
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//Inicio e configuração do servidor
// configurar arquivos est´sticos (css, scripts, imagens)
server.use(express.static("public"))
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/saveClasses", saveClasses)
//Start do servidor
.listen(5500)