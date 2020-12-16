const cors = require('cors');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(cors());
app.options('*', cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const PORT = 8888;
const HOST = "localhost";

const PRODUCTS = "https://vitl-static-api.s3-eu-west-1.amazonaws.com/fe-test.json";

app.use('/products', createProxyMiddleware({
    target: PRODUCTS,
    changeOrigin: true,
    pathRewrite: {
        [`^/products`]: '',
    },
}));

app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});