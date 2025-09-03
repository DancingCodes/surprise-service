const express = require('express');
const cors = require('cors');
const app = express();

// 允许跨域
app.use(cors());

// 路由
const routes = require('./routes')
app.use(routes);

// 启动服务器
app.listen(3005, () => {
    console.log('服务启动成功🚀');
});