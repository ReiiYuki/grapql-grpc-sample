import {
  GraphQLString,
	GraphQLInt
  GraphQLNonNull,
} from 'graphql'
import {CompanyListResponseType} from '../../types'

export default {
  name: "listCompany",
  type: CompanyListResponseType,
  resolve : (root, params) => //TODO
}
