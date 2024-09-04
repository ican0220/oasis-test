// app/api/users/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/app/supabase/supabaseClient";

interface Data {
  res: string;
  status: number;
}

export async function POST(request: NextRequest): Promise<NextResponse<Data>> {
  const req = await request.json();
  const {id}  = req;
  let { data, error } = await supabase.from("oasis_rooms").select("*").eq('id',id);

  console.log(data, error, id, 'fdsfdf')
  if (error) {
    return NextResponse.json({ res: `${error}`, status: 400 });
  } else {
    return NextResponse.json({ res: data&&data[0], status: 200 });
  }
}
