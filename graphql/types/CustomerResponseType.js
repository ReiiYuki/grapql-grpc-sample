import {
	GraphQLObjectType
} from 'graphql'
import CustomerType from './CustomerType'
import ResponseType from './ResponseType'

export default new GraphQLObjectType({
	name: 'CustomerResponse',
	fields: {
		response: {
			type: ResponseType
		},
		customer: {
			type: CustomerType
		}
	}
})
