
const express = require('express');
const path = require('path');
const app = express();



const PORT = process.env.PORT || 5000 ;



if(process.env.NODE_ENV === "production"){

    app.use(express.static(path.resolve(__dirname,'build')))

    app.get('*',(req,res)=>{
        return res.sendFile('/index.html');
    });
}




app.get('/',(req,res)=>{
   return res.send('<h1>HELLO BANYAL....</h1>')
})





app.listen(PORT,()=>{
    console.log(`server starte don PORT ${PORT}`)
})
