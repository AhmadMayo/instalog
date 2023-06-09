import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import getEvents from "./getEvents";

export async function GET(request: NextRequest) {
  const authorizationHeader = request.headers.get("Authorization") || "";
  const [_, userId] = authorizationHeader.split(" ");

  const userLocation = request.ip || "";

  const { searchParams } = request.nextUrl;
  const page = Number(searchParams.get("page")) || undefined;
  const pageSize = Number(searchParams.get("pageSize")) || undefined;
  const search = searchParams.get("search") || undefined;
  const filters = {
    action_id: searchParams.get("action_id") || undefined,
    actor_id: searchParams.get("actor_id") || undefined,
    target_id: searchParams.get("target_id") || undefined,
  };

  try {
    const result = await getEvents({
      userId,
      userLocation,
      page,
      pageSize,
      search,
      filters,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Search Events:", error);

    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}
