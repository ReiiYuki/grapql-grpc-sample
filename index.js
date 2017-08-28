import express from 'express'
import graphqlHTTP from './graphql'

const server = express()

server.use('/graphql', graphqlHTTP)

server.listen(1000,(err)=>{
	if (err) console.log(err)
	else console.log('Start Server at 6000' )
})
