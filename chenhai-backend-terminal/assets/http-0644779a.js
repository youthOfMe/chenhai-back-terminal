import { Q as t, R as o } from './index-94ead3f8.js'
const s = t.create({ baseURL: 'http://localhost:8080', timeout: 5e3 })
s.interceptors.request.use(
  (e) => (o() && (e.headers.token = o()), e),
  (e) => (console.log({ type: 'error', message: '' }), Promise.reject(e)),
)
s.interceptors.response.use(
  (e) => {
    const r = e.data
    return (
      console.log(r),
      r.success
        ? r
        : (console.log({ type: 'error', message: r.message || '请求错误' }),
          Promise.reject(new Error(r.message || '请求错误')))
    )
  },
  (e) => (console.log({ type: 'error', message: '请求错误' }), Promise.reject(e)),
)
function a(e, r) {
  return s({ method: 'post', url: e, data: r })
}
export { a as p }
