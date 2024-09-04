// app/api/users/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import supabase from '@/app/supabase/supabaseClient';
import jwt from 'jsonwebtoken';
import config from '@/app/config';

interface Data {
  res: string;
  status: number
}

export async function POST(request: NextRequest): Promise<NextResponse<Data>> {
  const req = await request.json();
  let {email, pwd} = req;
  let {data, error} = await supabase.from('oasis_users').select('*').eq('email', email).eq('pwd',pwd);
  if(data && data.length ==0){
    return NextResponse.json({ res: `${error}`, status: 400 });
  }else{
    let token = await jwt.sign({ id: data&&data[0].id, email: data&&data[0].email, role:data&&data[0].role }, process.env.JWT_SECRET?process.env.JWT_SECRET:config.jwt_secret, { expiresIn: '1h' });
    return NextResponse.json({ res: `${token}`, status: 200});
  }
  
}
