import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-around text-white text-xl">
      <Link href="/">LOGO 👹</Link>
      <ul>
        <Link href="/documentation">Documentation</Link>
        <Link href="/login">Login</Link>
      </ul>
    </div>
  );
};

export default Header;
