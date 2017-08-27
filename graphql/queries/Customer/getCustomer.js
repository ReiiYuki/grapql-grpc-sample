import {
  GraphQLString,
	GraphQLInt
  GraphQLNonNull,
} from 'graphql'
import {CustomerResponseType} from '../../types'

export default {
  name: "getCustomer",
  type: CustomerResponseType,
	args: {
		id : {
			name: 'id',
			type: GraphQLInt
		}
	}
  resolve : (root, params) => //TODO
}
