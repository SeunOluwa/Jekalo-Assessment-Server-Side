import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name_prefix: { type: String },
    first_name: { type: String, required: true },
    last_name: { type: String, optional: true },
    username: { type: String, required: true, distinct: true, unique: true },
    date_of_birth: { type: String, required: true }
})

export default mongoose.model("User", userSchema);
