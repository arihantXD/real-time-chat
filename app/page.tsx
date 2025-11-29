import { CreateRoom } from "@/components/custom/CreateRoom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center  items-center">
      <div className="flex w-[1200px] justify-between">
        <img src="/coding.svg" className="w-[60%]" alt="" />
        <div className="mt-[100px] w-[40%]">
          <span className="font-bold text-3xl">CodeBros</span>
          <span className="font-thin block text-xl">
            Welcome to real time immersive coding website
          </span>
          <p className="text-gray-500 mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            maiores aperiam nostrum consequuntur. Eos, maiores!
          </p>
          <CreateRoom />
        </div>
      </div>
    </div>
  );
}
