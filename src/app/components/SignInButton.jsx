import React from "react";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
const SignInButton = () => {
  const { data: session } = useSession();
  const click = async () => {
    await axios
      .get("/api/post")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div
        onClick={() => signIn()}
        className="flex cursor-pointer justify-center items-center h-screen">
        Sign In
      </div>
      <button onClick={click}>click</button>
    </div>
  );
};

export default SignInButton;
