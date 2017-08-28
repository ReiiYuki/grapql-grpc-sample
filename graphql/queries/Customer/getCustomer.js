import {
  GraphQLString,
	GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import {CustomerResponseType} from '../../types'
import {CustomerLoader} from '../../loaders'

export default {
  name: "getCustomer",
  type: CustomerResponseType,
	args: {
		name : {
			name: 'name',
			type: GraphQLString
		}
	},
  resolve : (root, params) => CustomerLoader.load(params.name)
}
