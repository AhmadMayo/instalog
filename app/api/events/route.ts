import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import getEvents from "./getEvents";

export async function GET(request: NextRequest) {
  const authorizationHeader = request.headers.get("Authorization") || "";
  const userId = authorizationHeader.split(" ")[1] || "";
  if (!userId) {
    return new NextResponse("Unauthorized access", { status: 401 });
  }

  const userLocation = request.ip || "";

  const { searchParams } = request.nextUrl;
  const page = Number(searchParams.get("page")) || 0;
  const pageSize = Number(searchParams.get("pageSize")) || 10;
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
