// app/api/users/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/app/supabase/supabaseClient";

interface Data {
  res: string;
  status: number;
}

export async function POST(request: NextRequest): Promise<NextResponse<Data>> {
  const req = await request.json();

  let { id, residence, bed_room, int_sf, ext_sf, price, est_cc, est_ret } = req;

  let { error } = await supabase
    .from("oasis_rooms")
    .update({
      residence: residence,
      bed_bath: bed_room,
      int_sf: int_sf,
      ext_sf: ext_sf,
      price: price,
      est_cc: est_cc,
      est_ret: est_ret,
    })
    .eq('id', id);

  if (error) {
    return NextResponse.json({ res: `${error}`, status: 400 });
  } else {
    return NextResponse.json({ res: `ok`, status: 200 });
  }
}
