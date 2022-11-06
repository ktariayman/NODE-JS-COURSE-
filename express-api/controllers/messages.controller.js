const getMessages =(req,res) => {
        res.send('<ul><li>si ayman</li></ul>')
    }

    const postMessages =(req,res) => {
        res.send('update')
    }

    module.exports = {
        getMessages,
        postMessages
    }