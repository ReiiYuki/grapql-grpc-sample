import DataLoader from 'dataloader'
import bluebird from 'bluebird'
import services from '../services'

function loadCompany(id) {
	console.log(id);
	return new Promise(
		(resolve,reject) => (
			services.CompanyService.findCompany({id:id}, (err,response) => {
				if (err) {
					reject(err)
				}else {
					resolve(response)
				}
			})
		)
	).then((data) => data.company)
	.catch((err) => err)
}

function loadCompanies(ids) {
	console.log(ids)
	return services.CompanyService
		.listCompanyByIdAsync({ids:ids})
		.then((res) => ids.map(id => res.companies.find((company) => company.id === id)))
		// .catch((err) => err)
}

let loader = new DataLoader(ids => loadCompanies(ids))

loader.createCompanyLoader = ()=>{
	loader = new DataLoader(ids => loadCompanies(ids))
}



export default loader
