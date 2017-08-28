import grpc from 'grpc'
import bluebird from 'bluebird'
const CUSTOMER_PROTO_PATH = __dirname+'/protos/customer.proto'
const COMPANY_PROTO_PATH =  __dirname+'/protos/company.proto'

const CustomerGRPC = grpc.load(CUSTOMER_PROTO_PATH).customer
const CompanyGRPC = grpc.load(COMPANY_PROTO_PATH).company
const CustomerService = bluebird.promisifyAll(new CustomerGRPC.CustomerService('127.0.0.1:50051',grpc.credentials.createInsecure()))
const CompanyService = bluebird.promisifyAll(new CompanyGRPC.CompanyService('127.0.0.1:50051',grpc.credentials.createInsecure()))

export default {CustomerService, CompanyService}
