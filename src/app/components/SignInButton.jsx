import React from "react";
import { signIn} from "next-auth/react";
const SignInButton = () => {

  return (
    <div onClick={() => signIn()} className="flex cursor-pointer justify-center items-center h-screen">
      Sign In
    </div>
  );
};

export default SignInButton;
