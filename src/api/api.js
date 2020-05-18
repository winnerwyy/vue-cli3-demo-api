import { httpGet, httpPost } from '../config/httpConfig'

const api = {
  getorglist: params => httpGet('apps/api/org/list', params),
  login: data => httpPost('user/userLogin', data, true)
}
export default api
