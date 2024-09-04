// app/api/users/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/app/supabase/supabaseClient";

interface Data {
  res: string;
  status: number;
}

export async function GET(request: NextRequest): Promise<NextResponse<Data>> {
  const req = await request.json();
  const {id} = req;
  let { data, error } = await supabase.from("oasis_rooms").delete().eq('id', id);

  if (error) {
    return NextResponse.json({ res: `${error}`, status: 400 });
  } else {
    return NextResponse.json({ res: 'ok', status: 200 });
  }
}
