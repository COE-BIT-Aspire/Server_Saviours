var mongoose = require('mongoose')

var Schema = mongoose.Schema;

async function mongoconnect(){
var skillSchema = new Schema({
    skillName: String,
    experience: Number,
    proficiency: String
})

var jobSeekerSchema = new Schema({
jobseekerName: String,
emailId: String,
age: Number,
certified: Boolean,
skills: [skillSchema]
})

var js = mongoose.model('jobseeker',jobSeekerSchema);

mongoose.connect("mongodb://127.0.0.1:27017/Aspire");
 
 var jobseeker1 = new js({
    jobseekerName: "Raj",
    age: 22,
    emailId: "raj@test.com",
    certified: true,
    skills: [{skillName:"java",experience:1,proficiency:"beginner"},
    {skillName:"angular",experience:2,proficiency:"intermediate"}]
})

jobseeker1.save();

const result = await js.find({});

const updateresult1 = await js.findOneAndUpdate({jobseekerName:"Raj"},{age:37},{new:true});

result.map(record=>console.log(record));
}

mongoconnect();