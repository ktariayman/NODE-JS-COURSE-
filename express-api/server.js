const express = require('express')

const app = express()

const port  = 8000

const friendsRouter = require("./router/friends.router")
const messagesRouter = require("./router/messages.router")


//     // simple middleware
// app.use( (req,res,next) => {
//     const start =Date.now()
//     next()
//     const delai = Date.now() -start
//     console.log(`${delai} ${req.method} ${req.url}`)

// })

app.use(express.json())

// routes 
app.use('/friends',friendsRouter)
app.use('/messages',messagesRouter)
app.listen(port, ()=> {
    console.log(`listening on port : ${port}`)
})