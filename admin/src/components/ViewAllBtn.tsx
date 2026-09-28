import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

type ViewBtnType = {
  btnName:string;
  url:string;
}

export default function ViewAllBtn({ btnName,url }: ViewBtnType) {
  return (
    <Link href={url} className="font-semibold text-xs flex items-center gap-1">
      <span>{btnName}</span>
      <IoMdArrowForward />
    </Link>
  );
}
