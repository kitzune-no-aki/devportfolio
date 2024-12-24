'use client';

import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Header = () => {
    return (
        <div className="text-BlueViolet container mx-auto flex items-center border-b-NeoRose border-b-2 px-6 py-2 h-24">
            <h1 className="font-bold">Miriam Pech</h1>
            <div className="grow hidden sm:flex items-center justify-center gap-2 md:gap-8">
                <Link href="/" className="hover:text-NeoRose">Home</Link>
                <Link href="/thatsme" className="hover:text-NeoRose">Thats me</Link>
                <Link href="/Projects" className="hover:text-NeoRose">Projects</Link>
                <Link href="/Resume" className="hover:text-NeoRose">Resume</Link>
            </div>
            <div className="hidden sm:block">
                <Link href="https://github.com/kitzune-no-aki" className="mr-2 font-bold hover:text-NeoRose">
                    GitHub
                </Link>
            </div>
            <Popover className="sm:hidden flex grow items-center justify-end relative">
                <Popover.Button className="absolute inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                <Popover.Panel className=" absolute top-full right-0 mt-5 w-48 origin-top-right rounded bg-white bg-opacity-80 shadow-lg ring-1 ring-black ring-opacity-5 text-center">
                    <div className="p-4 text-BlueViolet">
                        <Link href="/" className="block px-4 py-2 hover:text-NeoRose active:text-[rgb(255,0,110)] focus:text-BlueViolet">Home</Link>
                        <Link href="/thatsme" className="block px-4 py-2  hover:text-NeoRose">Thats me</Link>
                        <Link href="/Projects" className="block px-4 py-2 hover:text-NeoRose">Projects</Link>
                        <Link href="/Resume" className="block px-4 py-2 hover:text-NeoRose">Resume</Link>
                        <Link href="https://github.com/kitzune-no-aki" className="block px-4 py-2 hover:text-NeoRose">GitHub</Link>
                    </div>
                </Popover.Panel>
            </Popover>
        </div>
    );
};

export default Header;
