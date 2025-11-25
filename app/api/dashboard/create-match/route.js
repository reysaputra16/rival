import Match from "../../../../models/match";
import { connectToDB } from "../../../../utils/database";

export const POST = async (req) => {
  const data = await req.json();

  try {
    await connectToDB();

    const newMatch = new Match({
      ...data,
    });

    await newMatch.save();
    return new Response(JSON.stringify(newMatch), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new match", { status: 500 });
  }
};
