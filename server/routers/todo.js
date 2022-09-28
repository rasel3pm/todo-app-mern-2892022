const router = require('express').Router();
const Todo = require('../model/todo');

router.post('/create', async(req, res,next) => {
    try {
        const { text} = req.body;

        const todo = new Todo({
            text
        });

        const newTodo = await todo.save();
        if (newTodo) {
            res.status(200).json({ message: "Todo created Success",newTodo })
        } else {
            res.status(501).json({ Message: "Todo Not created " })
        }
    } catch (err) {
        console.log(err)
    }
});




router.get('/todos', async(req, res) => {
    try {
        const data = await Todo.find();

        if (data) {
            res.status(200).json(data)
        } else {
            res.status(501).json({ Message: "Data is not found" })
        }
    } catch (err) {
        console.log(err)
    }
});


router.patch('/:id', async(req, res) => {
    try {
        const data = await Todo.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });

        if (data) {
            res.status(200).json({ message: "updated Success",data })
        } else {
            res.status(501).json({ Message: "updated Data is not found" })
        }
    } catch (err) {
        console.log(err)
    }
});

router.delete('/delete:id', (req, res) => {
    try {
        Todo.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
            if (!err) {
                res.status(200).json({ message: "Delete todo success", data })
            } else {
                res.status(501).json({ Message: "Not Delete " })
            }
        });
    } catch (err) {
        console.log(err)
    }

})








module.exports=router