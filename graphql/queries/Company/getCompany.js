import {
  GraphQLString,
	GraphQLInt
  GraphQLNonNull,
} from 'graphql'
import {CompanyResponseType} from '../../types'

export default {
  name: "getCompany",
  type: CompanyResponseType,
	args: {
		id : {
			name: 'id',
			type: GraphQLInt
		}
	}
  resolve : (root, params) => //TODO
}
