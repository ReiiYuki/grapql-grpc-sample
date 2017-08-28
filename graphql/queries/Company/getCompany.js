import {
  GraphQLString,
	GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import {CompanyResponseType} from '../../types'
import {CompanyLoader} from '../../loaders'

export default {
  name: "getCompany",
  type: CompanyResponseType,
	args: {
		id : {
			name: 'id',
			type: GraphQLInt
		}
	},
  resolve : (root, params) => CompanyLoader.load(params.id)
}
