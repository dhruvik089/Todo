const express = require('express')
const cors = require('cors')
const User = require('./db/userScheama');

const app = express()
app.use(cors())
app.use(express.json())

app.get('/data', async (req, res) => {

    try {
        const data = await User.find();
        return res.status(200).json(
            data
        )
    }
    catch (e) {
        console.log(res.json({ msg: 'error' }));
    }

})

app.post('/add', async (req, res) => {
    try {
        const addData = new User({
            value: req.body.value
        })

        await addData.save()

        console.log(addData);

        return res.json({ mag: 'sucess' })

    } catch (err) {

        console.log(res.json({ msg: 'erorr' }));
    }
})

app.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await User.deleteOne({ _id: id })
        res.json(deleted.acknowledged)
    }
    catch (e) {
        console.log(e);
    }
})

app.put('/update/:id', async (req, res) => {
    try {
        const edit = await User.findById(req.params.id)
        const update = await User.updateOne({ _id: req.params.id }, { $set: { value: req.body.value } })
        res.json(update.acknowledged)
    }
    catch (e) {
        console.log(e);
    }
})

app.listen(8888, () => { console.log("Server is running on 8888") })