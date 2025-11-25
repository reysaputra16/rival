import Competition from "../../../../models/competition";
import { connectToDB } from "../../../../utils/database";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const searchText = searchParams.get("searchText") || "";

  try {
    await connectToDB();

    const competitionResult = await Competition.find({
      competitionName: { $regex: searchText, $options: "i" },
    });

    if (!competitionResult) {
      return new Response("There is no competition with that search parameter.", { status: 403 });
    }

    return new Response(JSON.stringify(competitionResult), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to retrieve data", { status: 500 });
  }
};
