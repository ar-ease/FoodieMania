import Link from "next/link";
import logoImg from "@/assets/logo.png";
import { ModeToggle } from "./dark-light-toggle";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
export default function MainHeader() {
  return (
    <>
      <header className="w-full flex justify-around p-2  ">
        <Link href="/" className="flex gap-2">
          <Image src={logoImg} alt="logo" className="w-20 h-16" priority />
          <h1 className="text-xl font-bold font-mono pt-5 text-orange-600">
            Next Level Food
          </h1>
        </Link>
        <nav className="flex gap-20 ">
          <div>
            <ul className="flex gap-5 text-sm pt-5 font-medium">
              <li>
                <Link href="/meals">Browse meals</Link>
              </li>
              <li>
                <Link href="/community">Foodies Community</Link>
              </li>
            </ul>
          </div>
          <div className="pt-4">
            <ModeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}
