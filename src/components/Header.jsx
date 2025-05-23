'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const navLeft = ['Air X', 'Lexo Z', 'Gravity 9'];
const navRight = ['Shop', 'Account'];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-[#1A1A1A] py-8 px-16 flex items-center justify-between text-white"
    >
      {/* ­­­­­­­­­­Left nav */}
      <nav className="flex space-x-8">
        {navLeft.map((label) => (
          <NavLink key={label}>{label}</NavLink>
        ))}
      </nav>

      {/* Logo / brand */}
      <p className="text-lg font-bold">
        Hype<span className="text-yellow-300">Dash</span>
      </p>

      {/* Right nav */}
      <nav className="flex items-center space-x-8">
        {navRight.map((label) => (
          <NavLink key={label}>{label}</NavLink>
        ))}
        <NavLink icon>
          <Menu className="w-6 h-6" />
        </NavLink>
      </nav>
    </motion.header>
  );
}

/* ---------------- helper ---------------- */

function NavLink({
  children,
  icon = false,
}) {
  return (
    <Link
      href="#"
      className={`relative ${
        icon ? 'p-1' : 'px-2 py-1'
      } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full`}
    >
      {children}
    </Link>
  );
}
