import {
  GraphQLString,
	GraphQLInt
  GraphQLNonNull,
} from 'graphql'
import {ResponseType} from '../../types'

export default {
  name: "addCompany",
  type: ResponseType,
  args: {
    name : {
      name : 'name',
      type : new GraphQLNonNull(GraphQLString)
    }
  },
  resolve : (root, params) => //TODO
}
