// proxy('**', {...}) matches any path, all requests will be proxied.
// proxy('**/*.html', {...}) matches any path which ends with .html
// proxy('/*.html', {...}) matches paths directly under path-absolute
// proxy('/api/**/*.html', {...}) matches requests ending with .html in the path of /api
// proxy(['/api/**', '/ajax/**'], {...}) combine multiple patterns
// proxy(['/api/**', '!**/bad.json'], {...}) exclusion



// include dependencies
var express = require('express');
var proxy = require('http-proxy-middleware');
var fs=require("fs");
// proxy middleware options
var options = {
  target: 'http://192.168.0.101:9000', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    // '^/api/old-path': '/api/new-path', // rewrite path
    // '^/api/remove/path': '/path' // remove base path
  },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    // 'dev.localhost:3000': 'http://192.168.0.101:9000'
  }
};



// create the proxy (without context)
var exampleProxy = proxy(options);

// mount `exampleProxy` in web server
var app = express();


 app.use(express.static("./"));
app.use('**/*.do', exampleProxy);
// app.use('**/*.html', exampleProxy);
// app.use('/api/test.do/api/test.do', exampleProxy);
// app.use('/api', exampleProxy);
// app.use('/api', proxy({target: 'http://192.168.0.101:9000', changeOrigin: true}));
// app.listen(3000);
app.listen(3000, () => {
    console.log('正在监听端口3000,localhost:3000'); //192.168.1.114换成你的ip,本机ip查询用cmd=>ipconfig
})




