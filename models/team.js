const { Schema, models, model } = require("mongoose");

const TeamSchema = new Schema({
  teamName: {
    type: String,
    required: [true, "Team Name is required!"],
  },
  sports: {
    type: [String],
    required: [true, "Sport is required"],
  },
  description: {
    type: String,
  },
  joinedDate: {
    type: Date,
    required: [true, "A joined date needs to be established!"],
  },
  owners: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  admins: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  isPublic: {
    type: Boolean,
    default: false,
  },
});

const Team = models.Team || model("Team", TeamSchema);

export default Team;
