import Team from "../../../../models/team";
import { connectToDB } from "../../../../utils/database";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const searchText = searchParams.get("searchText") || "";

  try {
    await connectToDB();

    const teamsResult = await Team.find({ teamName: { $regex: searchText, $options: "i" } });

    if (!teamsResult) {
      return new Response("There is no team with that search parameter.", { status: 403 });
    }

    return new Response(JSON.stringify(teamsResult), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to retrieve data", { status: 500 });
  }
};
