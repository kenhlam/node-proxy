const express = require('express');
const app = express();
const moment = require('moment')
    //导入cors模块,该模块为跨域所用
const cors = require('cors');
app.use(cors());

//解析表单的插件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/api/test.do', (req, res) => {
   
   
       
        res.json({ success: true, message: 'this is your message '  })
    
})



app.listen(9000, () => {
    console.log('正在监听端口3000,http://192.168.1.114:9000'); //192.168.1.114换成你的ip,本机ip查询用cmd=>ipconfig
})