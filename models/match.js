import { models, Schema, model } from "mongoose";

const MatchSchema = new Schema({
  matchName: {
    type: String,
    required: [true, "Match Name is required!"],
  },
  startDateAndTime: {
    type: Date,
    required: [true, "Start Date And Time is required!"],
  },
  location: {
    type: String,
  },
  sport: {
    type: String,
    required: [true, "Sport is required!"],
  },
  description: {
    type: String,
  },
  homeTeam: {
    type: String,
    required: [true, "Home team name is required!"],
  },
  awayTeam: {
    type: String,
    required: [true, "Away team name is required!"],
  },
  homePlayers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  awayPlayers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  homeManager: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  awayManager: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  referee: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
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

const Match = models.Match || model("Match", MatchSchema);

export default Match;
