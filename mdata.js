const mongoose = require("mongoose");
const { Schema } = mongoose;
// mongodb+srv://zaid:abc1234@cluster0.8n2gn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://zaid:abc1234@cluster0.8n2gn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

let employeSchema = new Schema({
    name: String,
    email: String,
    etype: String,
    hourlyRate: Number,
    Totalhour: Number
});

employeSchema.methods.totalSalary = function () {
    console.log(`Total income of ${this.name} Rs: ` + this.hourlyRate * this.Totalhour)
}


const employeModal = mongoose.model('Employee', employeSchema);

const employes = new employeModal({
    name: "Syed Muhemin ALi",
    email: 'smuheminali@gmail.com',
    etype: 'hourly',
    hourlyRate: 10,
    Totalhour: 16
});

employes.totalSalary()

// console.log("Total income employe Rs:" + employes.hourlyRate * employes.Totalhour)




