// components/Register/RegisterRouter.tsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Stage2 from "@/components/Auth/Register/Stage2";
import Stage3 from "@/components/Auth/Register/Stage3";
import Stage4 from "@/components/Auth/Register/Stage4";
import Stage5 from "@/components/Auth/Register/Stage5";
import Stage1 from "@/components/Auth/Register/Stage1";
import { cn } from "@/lib/utils";
import Success from "@/components/Auth/Register/Success";
import usePartnerSignupStore from "@/stores/partnerSingupStore";

const Register: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentStage = parseInt(searchParams.get("stage") as string);
  const success = searchParams.get("success");
  const { userData } = usePartnerSignupStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentStage === 2 && !userData.first_name) {
      navigate("/partner/register?stage=1");
    }
    if (currentStage > 2 && !userData.email) {
      navigate("/partner/register?stage=1");
    }
  }, [userData, navigate, currentStage]);

  return (
    <div className="w-full h-full flex flex-col gap-[40px]">
      {!success && (
        <div className="space-y-[20px] w-full">
          <div className="">
            <h2 className="font-satoshi text-center text-[#6E6E6E] text-[20px]">
              Create an account
            </h2>
          </div>
          <div className="flex gap-[8px] justify-center w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1 w-full md:w-[71.1px] rounded-full",
                  index < currentStage ? "bg-[#15221B]" : "bg-[#15221B]/12"
                )}
              ></div>
            ))}
          </div>
        </div>
      )}

      <div className="w-full">
        {currentStage === 1 && <Stage1 />}
        {currentStage === 2 && <Stage2 />}
        {currentStage === 3 && <Stage3 />}
        {currentStage === 4 && <Stage4 />}
        {currentStage === 5 && <Stage5 />}
      </div>

      {success && <Success />}
      <h3 className=" italic text-[16px] text-[#636C67] justify-self-end hidden md:block">
        <span className="font-[700]">Partner:</span> Join as a Partner
        (Distributor) to access exclusive partner shops, purchase product
        packages, and earn monthly profit shares through our distribution
        program. Perfect for business-oriented users.
      </h3>
    </div>
  );
};

export default Register;
