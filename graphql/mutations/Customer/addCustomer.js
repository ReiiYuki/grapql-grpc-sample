import {
  GraphQLString,
	GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import {CustomerResponseType} from '../../types'
import services from '../../services'

export default {
  name: "addCustomer",
  type: CustomerResponseType,
  args: {
    name : {
      name : 'name',
      type : new GraphQLNonNull(GraphQLString)
    },
    company : {
      name : 'company',
      type : new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve : (root, params) => new Promise(
		(resolve, reject) => (
			services.CustomerService.addCustomer({name:params.name, company: params.company}, (err,response) => {
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
