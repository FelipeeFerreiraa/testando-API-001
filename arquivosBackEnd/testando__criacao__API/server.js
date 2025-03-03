//felipe_domingues
//admadm

/*

npm install mongodb

mongodb+srv://felipe_domingues:<db_password>@clusterusuariostesteapi.hrmwj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterUsuariosTesteAPI

*/

//import express, { response } from 'express'
import express from "express"
import { PrismaClient } from "@prisma/client"
import cors from "cors"

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
//app.use(cors("http://localhost:5173/"));
app.use(cors());

//const usuarios = [];

app.post("/usuarios", async (request, response) => {

    // console.log(request.body)

    //usuarios.push(request.body);

    await prisma.user.create({
        data: {
            email: request.body.email,
            name: request.body.name,
            age: request.body.age
        }

    })

    response.status(201).json(request.body); //.send("OK, aqui deu certo");

});

app.get("/usuarios", async (request, response) => {
    //response.send("OK, deu bom!");

    //console.log(request)

    let usuarios = [];
    if (request.query) {
        usuarios = await prisma.user.findMany({
            where: {
                name: request.query.name,
                email: request.query.email,
                age: request.query.age
            }
        })
    } else {

        const usuarios = await prisma.user.findMany();

    }


    response.status(200).json(usuarios)

});

app.put("/usuarios/:id", async (request, response) => {

    // console.log(request)

    //usuarios.push(request.body);

    await prisma.user.update({
        where: {
            id: request.params.id
        },
        data: {
            email: request.body.email,
            name: request.body.name,
            age: request.body.age
        }

    })

    response.status(201).json(request.body); //.send("OK, aqui deu certo");

});

app.delete("/usuarios/:id", async (request, response) => {

    //await prisma.user.deleteMany();
    await prisma.user.delete({
        where: {
            id: request.params.id
        }
    });

    response.status(200).json({ mensage: "Usuário deletado com sucesso!" })
})

app.listen(3000); // rodando na porta 3000

/*

    cirar API de usuários

    1° criar um usuario
    2° listar todos os usuários
    3° editar usuarios
    4° deletar usuarios

*/







//app.post("/usuarios");
//app.put("/usuarios");
//app.patch("/usuarios");
//app.delete("/usuarios");


/*

    1° tipo de rota / metodo HTTP
    2° endereço (URL)

*/