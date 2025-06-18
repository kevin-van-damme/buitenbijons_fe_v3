import Link from "next/link";
import Image from "next/image";
import HeaderNavDropDown from "./HeaderNavDropDown";

const Header = () => {
  return (
    <div className="mx-auto flex justify-between max-w-6xl w-full py-5 text-lg font-semibold text-slate-900">
      <Link href="/">
        <Image
          src="/logo/logo_buitenbijons.svg"
          alt="buitenbijons logo"
          width={50}
          height={50}
          className="w-20 h-20 hover:scale-110 transition-all"
        />
      </Link>
      <HeaderNavDropDown />
    </div>
  );
};

export default Header;
