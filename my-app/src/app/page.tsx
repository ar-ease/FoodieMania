import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
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
  );
}
