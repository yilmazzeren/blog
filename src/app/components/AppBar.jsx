"use client";
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
const Appbar = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <main className="flex flex-col items-center justify-between py-5 max-w-7xl mx-auto">
        <div className="flex gap-4 ml-auto items-center">
          <div className="relative h-10 w-10">
            <Image
              src={session.user.image}
              alt={session.user.name}
              className="inline-block rounded-full"
              fill
            />
          </div>
          <p className="text-sky-600">{session.user.name}</p>
          <button onClick={() => signOut()} className="text-red-600">
            Sign Out
          </button>

          <Link href="/about">About</Link>
        </div>
      </main>
    );
  }
  return (
    <div className="flex cursor-pointer justify-end py-5 items-center">
      <p onClick={() => signIn()}>Sign in</p>
    </div>
  );
};

export default Appbar;
