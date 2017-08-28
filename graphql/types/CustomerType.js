import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GrpahQLInt,
	GraphQLNonNull
} from 'graphql'
import CompanyType from './CompanyType'
import {CompanyLoader} from '../loaders'

export default new GraphQLObjectType({
	name: 'Customer',
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		company: {
			type: new GraphQLNonNull(CompanyType),
			resolve: customer => CompanyLoader.load(customer.company)
		}
	}
})
