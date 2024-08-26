// const mongoose = require('mongoose');

// // Define the schema (you can define the fields and their types if known)
// const col1Schema = new mongoose.Schema({name:String}, { strict: false });

// // Create a model based on the schema
// const Col1 = mongoose.model('Col1', col1Schema, 'col1');

// // MongoDB connection function
// const url = 'mongodb+srv://ramsai123:ramsai123@cluster0.oh4fi9k.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0';

// const mongodb = async () => {
//   try {
//     await mongoose.connect(url);
//     console.log("Connected to MongoDB");

//     // Fetch all documents from the 'col1' collection
//     const documents = await Col1.find();
//     console.log('Documents:', documents);
//     const data=new Col1({"name":"ree"});
//     data.save(); 
//   } catch (error) {
//     console.log('Failed to connect to MongoDB:', error.message);
//   }
// }

// module.exports = mongodb;
// const mongoose = require('mongoose')
// const url = 'mongodb+srv://ramsai123:ramsai123@cluster0.oh4fi9k.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0'

// const Schema = new mongoose.Schema({name:{type:String,required:true},clg:{type:String,required:true}});
// const Col1 = mongoose.model('Col1', Schema, 'col1');
// const mongo = async () => {
//     try {
//         await mongoose.connect(url);
//         console.log('connected')

//       const doc1=new Col1({name:"ramramramram"});
//       doc1.save();
//       console.log('inserted')
//       const show = await Col1.find()
//       console.log(show)

//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }

// module.exports = mongo;

const mongoose = require('mongoose')
const url = 'mongodb+srv://ramsai123:ramsai123@cluster0.oh4fi9k.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0'


mongoose.connect(url)
const Schema = new mongoose.Schema({ name: { type: String, required: true }, firstname: { type: String, required: true }, lastname: { type: String, required: true }, email: { type: String, requered: true }, password: { type: String, required: true } });
const Col1 = mongoose.model('Col1', Schema, 'col1');


module.exports = Col1;