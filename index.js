const express= require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('new server')
})
app.get('/user', (req, res)=>{
    res.send('get user list')
})


app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})