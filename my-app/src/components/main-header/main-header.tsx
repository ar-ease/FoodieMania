import Link from "next/link";
import logoImg from "@/assets/logo.png";
import { ModeToggle } from "./dark-light-toggle";
import Image from "next/image";

import NavLink from "./nav-link";
export default function MainHeader() {
  return (
    <>
      <header className="w-full flex justify-around p-14  ">
        <Link href="/" className="flex gap-2">
          <Image src={logoImg} alt="logo" className="w-24 h-20 " priority />
          <h1 className="text-2xl font-bold font-mono pt-5 text-orange-699 dark:text-orange-600 ">
            Next Level Food
          </h1>
        </Link>
        <nav className="flex gap-20 ">
          <div>
            <ul className="flex gap-5 text-md pt-5 font-medium">
              <li>
                <NavLink href={"/meals"}>Browse meals</NavLink>
              </li>
              <li>
                <NavLink href={"/community"}>Foodies Community</NavLink>
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
