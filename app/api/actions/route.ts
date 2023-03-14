import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import getActions from "./getActions";

export async function GET(_request: NextRequest) {
  try {
    const result = await getActions();

    return NextResponse.json(result);
  } catch (error) {
    console.error("Get Users:", error);

    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
}
