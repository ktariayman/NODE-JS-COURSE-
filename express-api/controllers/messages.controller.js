const path = require("path")

const getMessages =(req,res) => {
        // res.sendFile(path.join(__dirname , "..", "messages","public","pic.jpg"))
        res.render('friends', {
            title: 'Messages to my Friends!',
            friend: 'Ktari ayman',
          });

    }

    const postMessages =(req,res) => {
        res.send('update')
    }

    module.exports = {
        getMessages,
        postMessages
    }