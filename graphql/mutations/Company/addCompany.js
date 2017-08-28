import {
  GraphQLString,
	GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import {CompanyResponseType} from '../../types'
import services from '../../services'

export default {
  name: "addCompany",
  type: CompanyResponseType,
  args: {
    name : {
      name : 'name',
      type : new GraphQLNonNull(GraphQLString)
    }
  },
  resolve : (root, params) => new Promise(
		(resolve, reject) => (
			services.CompanyService.addCompany({name:params.name}, (err,response) => {
				console.log(err,response)
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
