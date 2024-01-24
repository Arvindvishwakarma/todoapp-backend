const Todo = require('../models/todo')


const resolvers = {
    Query: {
        getTodo: async () => {
            return await Todo.find()
        },
    },

    Mutation: {
        createTodo: async (_, args) => {
            const date = new Date();
            const newTodo = new Todo({
                task: args.TodoInput.task,
                desc: args.TodoInput.desc,
                isComplete: args.TodoInput.isComplete,
                createDateTime: date,
            })
            return newTodo.save();
        },

        markComplete: async (_, { todoId }) => {
            const filter = { _id: todoId }

            const update = {
                isComplete: "completed"
            }
            return await Todo.findOneAndUpdate(filter, update, { new: true })
        },

        deleteTodo: async (_, { todoId }) => {
            return await Todo.findOneAndDelete({ _id: todoId })
        },
    }
}

module.exports = { resolvers }