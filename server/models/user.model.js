import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  { timestamps: true }
);

// Password Hashing Middleware
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

// Match user-entered password to HASHED-PASSWORD
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Export the User model
const userModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default userModel;

//! NOTES:
// pre: Defines a pre hook for the model.
// save: Indicates that the current operation is a save operation.
// bcrypt.genSalt: Creates a salt for hashing.
// next: Calls the next middleware function in the chain
// bcrypt.hash: Hashes the password using the generated salt.
// matchPassword: Compares the entered password with the hashed password.
// userModel: Returns the User model if it already exists, otherwise creates a new one.
// mongoose.models: Returns the existing model if it exists, otherwise creates a new one.
// mongoose.model: Creates or retrieves a model with the given name.
// UserSchema: Defines the schema for the User model.
// timestamps: Adds createdAt and updatedAt fields to the model.
// trim: Removes leading and trailing whitespace from the name and email fields.
// unique: Ensures that the email field is unique.
// lowercase: Converts the email field to lowercase.
// match: Validates the email field using a regular expression.
// bcrypt.compare: Compares the entered password with the hashed password.
// User: The exported User model.
// userModel: The User model if it already exists, otherwise creates a new one.
// methods: Object of currently defined methods on this schema.
// compare: Asynchronously tests a password against a hash.
