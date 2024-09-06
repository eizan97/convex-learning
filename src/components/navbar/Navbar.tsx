"use client";
import Image from "next/image";
import React from "react";
import cat from "../../../public/Logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full flex justify-between items-center h-14 px-6 border border-b-white">
      <div className="flex items-center gap-2">
        <Image src={cat} width={20} height={20} alt="cat" />
        <h2 className="text-md font-thin">Shortcat</h2>
      </div>
      <div className="w-1/2 flex  justify-center gap-4">
        <Link href="https://github.com/eizan97">
          <Button variant="outline" size="icon">
            <GitHubLogoIcon />
          </Button>
        </Link>
        <Link href="https://x.com/eizanKareem">
          <Button variant="outline" size="icon">
            <TwitterLogoIcon />
          </Button>
        </Link>
      </div>
      <div className="flex ">
        <Button variant="outline">Free Trial</Button>
      </div>
    </div>
  );
};

export default Navbar;
