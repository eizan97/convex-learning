"use client";

import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Vector from "../../public/Vector.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push("../auth/sign-up")
  }
  return (
    <main className="flex flex-col justify-between max-w-full">
      <Navbar />
      <div className="flex gap-2">
        <div className="w-4/5 p-12 gap-6 flex flex-col">
          <div className="text-6xl font-semibold leading-[72px]">
            <h2>Bringing A Joyful Fast Ai Learning At Limited Short Time</h2>
          </div>
          <p>Short Cat is a platform where a Tutor can prepare student with their subject topics before daily meeting</p>
          <Button onClick={handleClick}>Get started</Button>
        </div>
        <div className="pt-20  flex place-items-end justify-end w-full">
          <Image src={Vector} width={500} height={500} alt="cat" />
        </div>
      </div>
    </main>
  );
}
