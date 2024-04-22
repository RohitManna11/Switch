import React from "react";

interface ButtonProps {
  h: string;
  w: string;
  label: string;
  textSize: string;
  disabled: boolean;
  action: any;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  h,
  w,
  label,
  textSize,
  disabled,
  action,
}) => {
  return (
    <div
      className={`${h} ${w} flex flex-row justify-center items-center ${textSize} ${
        disabled ? "text-white/70" : "text-white"
      } font-rubik font-extrabold transition delay-75 rounded-[2px] ${
        disabled
          ? "border-[1.5px] border-solid border-secondaryGrey bg-primaryGrey"
          : "border-[1.5px] border-solid border-secondaryPurple bg-primaryPurple cursor-pointer hover:bg-secondaryPurple"
      }`}
      onClick={!disabled ? action : () => {}}
    >
      {label}
    </div>
  );
};

export default PrimaryButton;
