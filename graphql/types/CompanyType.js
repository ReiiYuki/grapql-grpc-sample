import {
	GraphQLID,
	GraphQLObjectType,
	GraphQLString,
	GrapQLNonNull
} from 'graphql'

export default new GraphQLObjectType({
	name: 'Company',
	fields: {
		id: {
			type: new GrapQLNonNull(GraphQLID)
		},
		name: {
			type: new GrapQLNonNull(GraphQLString)
		}
	}
})
