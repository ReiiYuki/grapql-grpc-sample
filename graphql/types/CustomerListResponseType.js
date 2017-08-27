import {
	GraphQLObjectType,
	GraphQLList
} from 'graphql'
import CustomerType from './CustomerType'
import ResponseType from './ResponseType'

export default new GraphQLObjectType({
	name: 'CompanyListResponse',
	fields: {
		response: {
			type: ResponseType
		},
		customers: {
			type: new GraphQLList(CustomerType)
		}
	}
})
