import {
	GraphQLObjectType
} from 'graphql'
import CompanyType from './CompanyType'
import ResponseType from './ResponseType'

export default new GraphQLObjectType({
	name: 'CompanyResponse',
	fields: {
		response: {
			type: ResponseType
		},
		company: {
			type: CompanyType
		}
	}
})
