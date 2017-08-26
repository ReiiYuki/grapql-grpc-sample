import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GrpahQLInt,
	GrapQLNonNull
} from 'graphql'
import CompanyType from './CompanyType'

export default new GraphQLObjectType({
	name: 'Customer',
	fields: {
		id: {
			type: new GrapQLNonNull(GraphQLID)
		},
		name: {
			type: new GrapQLNonNull(GraphQLString)
		},
		company: {
			type: new GrapQLNonNull(CompanyType)
		}
	}
})
