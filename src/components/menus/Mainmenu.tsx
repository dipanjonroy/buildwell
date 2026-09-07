import { menus } from "@/libs/menuitems";
import Link from "next/link";

export default function Mainmenu() {
  return (
    <nav className="flex gap-x-16">
      {
        menus.map((menu,index)=>(
          <Link key={index} href={menu.url}>{menu.item}</Link>
        ))
      }
    </nav>
  );
}