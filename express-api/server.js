const express = require('express')

const app = express()

const port  = 8000



const friends = [
    {
        id:0,
        name:'sir ayman'
    },
    {
        id:1,
        name:'sir ktari'

    }
    ]

    // simple middleware
app.use( (req,res,next) => {
    const start =Date.now()
    next()
    const delai = Date.now() -start
    console.log(`${delai} ${req.method} ${req.url}`)

})

app.use(express.json())

app.post('/friends', (req,res) => {
    if(!req.body.name || req.body.name.length < 3 ||  req.body.name.length > 30) {
        return res.json({
            error: 'friend name is missing'
        })
    }
    const newFriend = {
            id:friends.length,
            name:req.body.name
    }
    friends.push(newFriend)
    res.json(friends)
})
app.get('/friends', (req,res) => {
    res.json(friends)
    console.log(friends)
})

app.get('/friends/:id', (req,res) => {
    const friendId = req.params.id;
    const friend = friends[friendId]
    if(friend){
        res.json(friend)
    }else{
        res.send('error')
    }
})

// app.get('/messages', (req,res) => {
//     res.send('<ul><li>si ayman</li></ul>')
// })

app.listen(port, ()=> {
    console.log(`listening on port : ${port}`)
})