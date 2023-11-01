'use client'
import React from "react";
import {useSession} from "next-auth/react";
import { redirect } from 'next/navigation'
 const About=()=> {
     const { data } = useSession({
         required: true,
         onUnauthenticated() {
             redirect('/api/auth/signin?callbackUrl=/')
         }
     })
    return (
        <div>asd</div>
    );
}
export default About
