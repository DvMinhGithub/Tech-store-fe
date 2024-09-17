import { httpGet, httpPost } from '../configs/api'

const VOUCHER_BASE_URL = '/voucher'

const voucherService = {
  create: (data) => httpPost(`${VOUCHER_BASE_URL}/create`, data),
  getValid: () => httpGet(`${VOUCHER_BASE_URL}/getVoucherValid`),
  getAll: () => httpGet(`${VOUCHER_BASE_URL}/getAll`),
  getByCode: (code) => httpGet(`${VOUCHER_BASE_URL}/getByCode?code=${code}`)
}

export default voucherService
