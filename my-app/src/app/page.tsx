import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href="/meals">
          <Button>Go to Meals</Button>
        </Link>
        <Link href="/community">
          <Button>Go to Community</Button>
        </Link>
        <Link href="/meals/share">
          <Button>Go to Share</Button>
        </Link>
      </main>
      <div className="">Click mee</div>
    </div>
  );
}