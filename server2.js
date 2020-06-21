const http = require('http')

http.createServer((req, res) => {
  console.log('request come', req.url)
  // CORS 预请求，是因为使用 CORS 有一些限制
  // 1. 默认允许的方法 GET,HEAD,POST，如果使用PUT,DELETE等其他方法请求就会有限制，会先发送预请求
  // 2. 默认允许的 Content-Type 为 text/plain,multipart/form-data,application/x-www-form-urlencoded，其他的比如application/json，会先发送预请求
  // 3. 默认允许的请求头包括 Accept,Accept-Language,Content-Language,Content-Type，其他请求头，会先发送预请求
  res.writeHead(200, {
    // 允许访问的域名
    'Access-Control-Allow-Origin': '*',
    // 允许设置的自定义头信息，默认有 application/formdata
    'Access-Control-Allow-Headers': ['X-Test-Cors'],
    'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT',
    // 规定时间内，重复请求不需要发送预请求
    'Access-Control-Max-Age': '5'
  })
  res.end('123')
  // res.end(`test('123')`)
}).listen(8887)

console.log(`server listening on 8887`)
