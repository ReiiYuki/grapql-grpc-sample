import {
  GraphQLString,
	GraphQLInt
  GraphQLNonNull,
} from 'graphql'
import {CustomerListResponseType} from '../../types'

export default {
  name: "listCustomer",
  type: CustomerListResponseType,
  resolve : (root, params) => //TODO
}
