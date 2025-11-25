import Match from "../../../../models/match";
import { connectToDB } from "../../../../utils/database";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const searchText = searchParams.get("searchText") || "";

  try {
    await connectToDB();

    const matchResult = await Match.find({ matchName: { $regex: searchText, $options: "i" } });

    if (!matchResult) {
      return new Response("There is no match with that search parameter.", { status: 403 });
    }

    return new Response(JSON.stringify(matchResult), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to retrieve data", { status: 500 });
  }
};
