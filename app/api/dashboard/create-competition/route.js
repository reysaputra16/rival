import { connectToDB } from "../../../../utils/database";
import Competition from "../../../../models/competition";

export const POST = async (req) => {
  const data = await req.json();

  try {
    await connectToDB();
    const existingComp = await Competition.findOne({ competitionName: data.competitionName });

    if (existingComp) {
      return new Response("The competition name already exists. Please choose another one!", {
        status: 403,
      });
    } else {
      const newCompetition = new Competition({
        ...data,
      });

      await newCompetition.save();
      return new Response(JSON.stringify(newCompetition), { status: 201 });
    }
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new user", { status: 500 });
  }
};
