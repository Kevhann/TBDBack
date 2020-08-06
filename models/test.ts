import mongoose from "mongoose"

const testSchema = new mongoose.Schema({ name: { type: String } })

// testSchema.set("toJSON", {
//   transform: (_document, returnedObject) => {
//     returnedObject.id = returnedObject._id
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

export const Test = mongoose.model("test", testSchema)
