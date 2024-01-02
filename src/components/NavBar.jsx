"use client";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className="container mx-auto ">
      <div className="navbar bg-[#3F00E7] text-white">
        <div className="flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#3F00E7] rounded-box w-52 flex gap-4"
            >
              <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/course">Course</Link>
            <Link href="/services">Services</Link>
            <Link href="/signup">SignUP</Link>
            <Link href="/signin">Sign IN</Link>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex gap-4 font-semibold">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/course">Course</Link>
            <Link href="/services">Services</Link>
            <Link href="/signup">SignUP</Link>
            <Link href="/signin">SignIN</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
