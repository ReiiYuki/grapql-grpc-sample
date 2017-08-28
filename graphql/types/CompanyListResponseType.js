import {
	GraphQLObjectType,
	GraphQLList
} from 'graphql'
import CompanyType from './CompanyType'
import ResponseType from './ResponseType'

export default new GraphQLObjectType({
	name: 'CompanyListResponse',
	fields: {
		response: {
			type: ResponseType
		},
		companies: {
			type: new GraphQLList(CompanyType)
		}
	}
})
