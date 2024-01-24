const { gql } = require('apollo-server');

const typeDefs = gql`

type todo {
    id: ID
    task: String
    desc: String
    isComplete:String
    createDateTime:String
}

input todoInput {
    task: String
    desc: String
    isComplete:String
}

type Query{
    getTodo:[todo]
}

type Mutation{
    createTodo(TodoInput:todoInput):todo
    markComplete(todoId:ID):todo
    deleteTodo(todoId:ID):todo
}

`

module.exports = { typeDefs }