import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import getEventById from "./getEventById";

export async function GET(
  request: NextRequest,
  { params: { eventId } }: { params: { eventId: string } }
) {
  const authorizationHeader = request.headers.get("Authorization") || "";
  const userId = authorizationHeader.split(" ")[1] || "";
  if (!userId) {
    return new NextResponse("Unauthorized access", { status: 401 });
  }

  try {
    const result = await getEventById(eventId);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Get Event By Id:", error);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}
