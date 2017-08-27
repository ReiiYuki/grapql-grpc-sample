import {
  GraphQLString,
	GraphQLInt
  GraphQLNonNull,
} from 'graphql'
import {ResponseType} from '../../types'

export default {
  name: "addCustomer",
  type: ResponseType,
  args: {
    name : {
      name : 'name',
      type : new GraphQLNonNull(GraphQLString)
    },
    company : {
      name : 'company',
      type : new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve : (root, params) => //TODO
}
