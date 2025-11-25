import { Schema, model, models } from "mongoose";

const CompetitionSchema = new Schema({
  competitionName: {
    type: String,
    required: [true, "Competition Name is required!"],
  },
  startDate: {
    type: Date,
    required: [true, "Start Date is required!"],
  },
  endDate: {
    type: Date,
  },
  sports: {
    type: [String],
    required: [true, "Sport is required!"],
  },
  description: {
    type: String,
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

const Competition = models.Competition || model("Competition", CompetitionSchema);

export default Competition;
