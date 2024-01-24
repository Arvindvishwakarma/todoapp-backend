const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const {resolvers} = require('./schema/resolvers');
const {typeDefs} = require('./schema/type-defs');
const server = new ApolloServer({typeDefs, resolvers})

mongoose.connect(`mongodb+srv://arvind:arvind123@cluster0.6ymbb.mongodb.net/testtodo?authSource=admin&replicaSet=atlas-1x6vxn-shard-0&readPreference=primary&ssl=true`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    server.listen({port:4000}).then(()=>{
        console.log('Server is running!!!')
    })
}).catch(err=>{
    console.log(err)
})