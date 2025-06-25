"use client";

import { db } from '../configs/db';
import { USER_TABLE } from '../configs/shema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

function Provider({children}) {

  const {user}=useUser();

  useEffect(()=>{
     user&&CheckNewUser();
  },[user])
  //checks user already exists or not 

  const CheckNewUser= async()=>{
    const result= await db.select().from(USER_TABLE).where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress));
    console.log(result);
    if(result?.length==0){
     const UserRes= await db.insert(USER_TABLE).values({
        username:user?.fullName,
        email:user?.primaryEmailAddress?.emailAddress,
      }).returning({id:USER_TABLE.id})
      console.log("New User Created",UserRes);
    }
  }

  return (
    <>
     {children}
    </>
   
  )
}

export default Provider