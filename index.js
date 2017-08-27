import express from 'express'
import graphqlHTTP from './graphql'

const server = express()

server.use('/graphql', graphqlHTTP)

server.listen(6000)
