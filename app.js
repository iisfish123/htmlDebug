const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/"+"index.html")        
})

app.get("/PlanBenefitItem.html",(req,res)=>{
    res.sendFile(__dirname+"/"+"PlanBenefitItem.html")    
})

app.get("/imgs/*",(req,res)=>{
    res.sendFile(__dirname+req.url)    
})

app.get("/css/*",(req,res)=>{
    res.sendFile(__dirname+req.url)
})

app.get("/js/*",(req,res)=>{
    res.sendFile(__dirname+req.url) 
})

app.use('/insurance-finance-vs-api/api/fvse/', createProxyMiddleware({ target: 'https://dev.xxxx.com', changeOrigin: true,secure:false, }));
app.use('/f4/api/scm/', createProxyMiddleware({ target: 'https://dev.xxxx.com', changeOrigin: true,secure:false, }));

app.listen(8000);