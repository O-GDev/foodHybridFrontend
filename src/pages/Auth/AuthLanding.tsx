import PageTitle from "@/components/Auth/PageTitle";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const AuthLanding: React.FC = () => {
  return (
    <div className="w-full space-y-8">
      <PageTitle
        title="Welcome"
        subtitle="Create an account or Log into your existing account"
      />
      <div className="flex flex-col gap-[10px] items-center ">
        <p className="text-[#6E6E6E]">New User?</p>
        <Button className="w-full" asChild>
          <Link to="/partner/register?stage=1">Create an account</Link>
        </Button>
      </div>
      <div className="flex flex-col gap-[10px] items-center">
        <p className="text-[#6E6E6E]">Existing User?</p>

        <Button className="w-full" asChild>
          <Link to="/partner/login">Sign in</Link>
        </Button>
      </div>
    </div>
  );
};

export default AuthLanding;
