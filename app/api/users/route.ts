// 과거의 API 통신 방법 (API route handler를 활용한 API route 구축)
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return Response.json({
    ok: true,
  });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return Response.json(data);
}
