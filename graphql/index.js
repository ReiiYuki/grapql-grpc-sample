import graphqlHTTP from 'express-graphql'
import schema from './schema'

export default graphqlHTTP(req => ({
  schema,
  graphiql: true,
  pretty: true
}))
