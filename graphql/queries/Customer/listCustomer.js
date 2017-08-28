import {
  GraphQLString,
	GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import {CustomerListResponseType} from '../../types'
import services from '../../services'
import {CompanyLoader} from '../../loaders'

export default {
  name: "listCustomer",
  type: CustomerListResponseType,
  resolve : (root, params) => new Promise(
		(resolve, reject) => (
			services.CustomerService.listCustomer({}, (err,response) => {
				CompanyLoader.createCompanyLoader()
				if (err) {
					reject(err)
				}else {
					resolve(response)
				}
			})
		)
	).then((data) => data)
	.catch((err) => err)
}
