import http from "node:http"
import { json } from "./middleware/json.js"
import { Database } from "./database.js"
import { routes } from "./routes.js"

// METHODS HTTP:
// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// Stateful - Stateless

// JSON - Javascript Object Notation

// Cabeçalhos (Requisição/Resposta) => Metadados

// HTTP Status Code


// Query Paramenters => http://localhost:3333/users?userID=1&name=Diego | usados para filtros, paginação, não-obrigátorias
// Route Paramenters => http://localhost:3333/users/1 | Identificação de recurso
// Request Body => | Envio de informações de um formulário


const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)


  const route = routes.find(route => (
    route.method == method && route.path == url
  ))

  if (route) {
    return route.handler(req, res)
  }


  return res.writeHead(404).end()
})

server.listen(3333)