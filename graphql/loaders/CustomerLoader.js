import DataLoader from 'dataloader'
import {CustomerService} from '../services'

function loadCustomer(name) {
	return new Promise(
		(resovle,reject) => (
			CustomerService.findCustomer({name:name}, (err,response) => {
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

export default new DataLoader(name => loadCustomer(name))
