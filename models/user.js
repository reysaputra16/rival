import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required!'],
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required!'],
    },
    address: {
        type: String,
        required: [true, 'Address is required!'],
    },
    postCode: {
        type: String,
        required: [true, 'Postal Code is required!'],
    },
    city: {
        type: String,
        required: [true, 'City is required!'],
    },
    tel: {
        type: String,
        required: [true, 'Telephone is required!'],
    },
    email: {
        type: String,
        required: [true, 'E-Mail is required!'],
    },
    password: {
        type: String,
    },
    nationality: {
        type: String,
        required: [true, 'Nationality is required!'],
    },
    birthDate: {
        type: Date,
        required: [true, 'Birth Date is required!'],
    },
    image: {
        type: String,
    },
    confirmEmail: {
        type: Boolean,
        default: false,
    },

});

const User = models.User || model("User", UserSchema);

export default User;