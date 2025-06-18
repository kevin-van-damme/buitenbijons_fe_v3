"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const HeaderNavDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* DEKSTOP VERSIE */}
      <nav className="hidden lg:flex items-center">
        <ul className="flex gap-3">
          <li>
            <Link href="/aboutpage" className="hover:text-slate-700 transition-all">
              About
            </Link>
          </li>
          <li>
            <Link href="/all-campings" className="hover:text-slate-700 transition-all">
              Campings
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-slate-700 transition-all">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="hover:text-slate-700 transition-all">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
      {/* GSM VERSIE */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={50} /> : <Menu size={50} />}</button>
      </div>
      {isOpen && (
        <div className="absolute top-24 right-5 bg-white shadow-lg rounded-lg p-5 w-60 z-50">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/aboutpage" onClick={() => setIsOpen(false)} className="hover:text-slate-700 transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/all-campings" onClick={() => setIsOpen(false)} className="hover:text-slate-700 transition-all">
                Campings
              </Link>
            </li>
            <li>
              <Link href="/login" onClick={() => setIsOpen(false)} className="hover:text-slate-700 transition-all">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" onClick={() => setIsOpen(false)} className="hover:text-slate-700 transition-all">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default HeaderNavDropDown;
