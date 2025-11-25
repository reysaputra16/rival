import Team from "../../../../models/team";
import { connectToDB } from "../../../../utils/database";

export const POST = async (req) => {
  const data = await req.json();

  try {
    await connectToDB();

    const existingTeam = await Team.findOne({ teamName: data.teamName });

    if (existingTeam) {
      return new Response("The team name already exists. Please choose another one!", {
        status: 403,
      });
    }

    const newTeam = new Team({
      ...data,
    });

    await newTeam.save();
    return new Response(JSON.stringify(newTeam), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new team", { status: 500 });
  }
};
