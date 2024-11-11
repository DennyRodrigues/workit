import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  link: string;
  className?: string;
}

const ButtonLink: React.FC<ButtonProps> = ({ text, link, }) => {
  return (
    <Link
      className="bg-eucaplyptus text-black font-bold py-4 px-6 lg:text-xl rounded transition-all duration-200 ease-in-out hover:bg-transparent hover:text-eucaplyptus hover:border-2 hover:border-eucaplyptus focus:outline-none"
      type="button" href={link}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
