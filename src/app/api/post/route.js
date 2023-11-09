import axios from "axios";
import { getAuthSession } from "@/app/utils/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(`${process.env.DB_URL}/post`);
    return new NextResponse(JSON.stringify(response.data, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
}

export async function POST(request) {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }
  const res = await request.json();
  const reqBody = {
    ...res,
    user: session.user,
  };
  try {
    const response = await axios.post(`${process.env.DB_URL}/post`, reqBody);
    return new NextResponse(JSON.stringify(response.data, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
}
