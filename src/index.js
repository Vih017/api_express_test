import 'dotenv/config'
import app from "./app.js"

async function main() {
    console.log("Server Iniciando...")
    let valor =process.env.PORT
    if(process.env.PORT ==0||process.env.PORT ==""||process.env.PORT ==undefined||process.env.PORT ==null){
        console.log("PORT nao encontrado") 
        valor =6666
    }
    
    const server = app.listen(valor, ()=> console.log("Server Iniciado"))
    process.on("SIGTERM", () => ending(server))
    process.on("SIGINT", () => ending(server))

}
function ending(server){
    console.log("Desligando servidor")
    server.close()
}

main()
