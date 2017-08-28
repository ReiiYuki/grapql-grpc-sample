import {
	GraphQLID,
	GraphQLObjectType,
	GraphQLString,
	GraphQLNonNull
} from 'graphql'

export default new GraphQLObjectType({
	name: 'Company',
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		name: {
			type: new GraphQLNonNull(GraphQLString)
		}
	}
})
