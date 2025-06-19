"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HeaderNavDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="hidden lg:flex md:flex md:mx-2 md:text-2xl items-center">
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
              Register
            </Link>
          </li>
        </ul>
      </nav>
      <div className="lg:hidden md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="hover:cursor-pointer">
          {isOpen ? <X size={47} /> : <Menu size={47} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 right-5 bg-white shadow-lg rounded-lg p-5 w-60 z-50 lg:hidden md:hidden"
          >
            <ul className="flex flex-col gap-4 ">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default HeaderNavDropDown;
