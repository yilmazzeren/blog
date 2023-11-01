'use client'
import React from "react";
import axios from "axios";
import {signOut, useSession} from "next-auth/react";
import Appbar from "@/app/components/AppBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const { data: session } = useSession();
 const click = ()=>{
         axios.post("http://localhost:8081/api/post",{
             title: "string",
             description: "string",
             categoryId: "653f62a483ba371b46a87e0c",
             user: session.user
         }).then((res)=>console.log(res)).catch(err=>console.log(err))
     }
    if (session && session.user) {
       return  <main className="flex min-h-screen flex-col items-center justify-between pt-10 max-w-7xl mx-auto">
           <div className="flex gap-4 ml-auto items-center">
               <div className='relative h-10 w-10'>
                   <Image
                       src={session.user.image}
                       alt={session.user.name}
                       className='inline-block rounded-full'
                       fill
                   />
               </div>
               <p className="text-sky-600">{session.user.name}</p>
               <button onClick={() => signOut()} className="text-red-600">
                   Sign Out
               </button>

               <Link href="/about">About</Link>
           </div>


           <button className="mb-10" onClick={click}>Add post</button>

        </main>
    }
  return (
    <div>
        <Appbar/>
    </div>
  );
}
