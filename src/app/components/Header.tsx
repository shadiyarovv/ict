import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link href={"/"}>
          <Image
            width={2214}
            height={1054}
            alt="Qazaqstan Flag"
            src={"/qz.png"}
            className="w-32"
          />
        </Link>
        <nav className="flex gap-4">
          <Link href={"/culture"} className="text-blue-600 hover:text-blue-800">
            Culture
          </Link>
          <Link href={"/symbols"} className="text-blue-600 hover:text-blue-800">
            National Symbols
          </Link>
          <Link href={"/famous"} className="text-blue-600 hover:text-blue-800">
            Famous People
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
