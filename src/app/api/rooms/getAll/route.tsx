// app/api/users/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/app/supabase/supabaseClient";

interface Data {
  res: string;
  status: number;
}

const priceList = [
  600, 800, 1000, 1200
]
export async function POST(request: NextRequest): Promise<NextResponse<Data>> {
  let req = await request.json();
  let {bedroom, price} = req;
  let query = supabase.from("oasis_rooms").select("*");
  if(bedroom !=undefined){
    query = query.like('bed_bath', `${bedroom}/*`);
  }
  if(price != undefined){
    if(price == 3) query = query.gte('price', priceList[price]);
    else{
      query = query.gte('price', priceList[price]);
      query = query.lte('price', priceList[price + 1]);
    }
  }
  let { data, error } = await query;
  console.log(query)
  console.log(error);

  if (error) {
    return NextResponse.json({ res: `${error}`, status: 400 });
  } else {
    return NextResponse.json({ res: data, status: 200 });
  }
}
