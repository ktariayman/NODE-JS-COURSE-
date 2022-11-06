const friends = require('../models/friends.model')

const getFriends =  (req,res) => {
    res.json(friends)
    console.log(friends)
}

const getFriend = (req,res) => {
    const friendId = req.params.id;
    const friend = friends[friendId]
    if(friend){
        res.json(friend)
    }else{
        res.send('error')
    }
}

const postFriend = (req,res) => {
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
}

module.exports= {
    getFriends,
    getFriend,
    postFriend
}