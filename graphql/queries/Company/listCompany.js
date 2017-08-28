import {
  GraphQLString,
	GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import {CompanyListResponseType} from '../../types'
import {CompanyService} from '../../services'

export default {
  name: "listCompany",
  type: CompanyListResponseType,
  resolve : (root, params) => new Promise(
		(resolve, reject) => (
			CompanyService.listCompany({}, (err,response) => {
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
