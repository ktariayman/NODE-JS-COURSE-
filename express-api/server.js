const express = require('express')
const path = require('path');

const app = express()

const friendsRouter = require("./router/friends.router")
const messagesRouter = require("./router/messages.router")

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const port  = 8000

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json())


//     // simple middleware
// app.use( (req,res,next) => {
//     const start =Date.now()
//     next()
//     const delai = Date.now() -start
//     console.log(`${delai} ${req.method} ${req.url}`)

// })

// routes 
app.get('/',(req,res)=> {
    res.render('index' , {
        title:'Expres API',
        caption:'I believe that '
    })
})
app.use('/friends',friendsRouter)
app.use('/messages',messagesRouter)
app.listen(port, ()=> {
    console.log(`listening on port : ${port}`)
})