const mongoose = require('mongoose')
const url = 'mongodb+srv://ramsai123:ramsai123@cluster0.oh4fi9k.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0'


mongoose.connect(url)
const Schema = new mongoose.Schema({ name: { type: String, required: true }, email: { type: String, required: true }, phonenumber: { type: String, required: true }, education: { type: String, requered: true }, skills: { type: String, required: true },linkedinurl:{type:String,required:true},githuburl:{type:String,required:true} });
const resumeformdata = mongoose.model('resumeformdata', Schema, 'resumeformdata');


module.exports = resumeformdata;