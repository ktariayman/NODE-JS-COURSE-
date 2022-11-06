const path = require("path")

const getMessages =(req,res) => {
        res.sendFile(path.join(__dirname , "..", "messages","public","pic.jpg"))

    }

    const postMessages =(req,res) => {
        res.send('update')
    }

    module.exports = {
        getMessages,
        postMessages
    }