import React from 'react'
import { Coffee } from "lucide-react";

import starbucksLogo from '../assets/icons/logo.svg';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-(--starbucks-green) text-white py-[clamp(3rem,8vw,5rem)] px-[clamp(1.5rem,5vw,3rem)] border-t border-[#00704a]">

            <div className="container mx-auto max-w-7xl">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(2.5rem,5vw,4rem)] mb-[clamp(3rem,6vw,5rem)]">
                
                    {/* First List：Brand Information */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-[clamp(0.5rem,1.5vw,1rem)] mb-[clamp(1rem,2vw,1.5rem)]">
                            <img src={starbucksLogo} alt="Starbucks Logo" className="w-[clamp(1.75rem,3vw,2rem)] h-[clamp(1.75rem,3vw,2rem)]" />
                            <span className="text-[clamp(1.5rem,3vw,2rem)] tracking-tight">Starbucks</span>
                        </div>
                        <p className="text-white/80 text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed max-w-sm">
                            More than coffee, it's a way of life. Committed to bringing quality coffee experiences to every customer.
                        </p>
                    </div>

                    {/* Second List：Products */}
                    <div>
                        <h4 className="font-medium mb-[clamp(1rem,2vw,1.5rem)] text-[clamp(1.125rem,1.5vw,1.25rem)] tracking-wide">
                            Collections
                        </h4>
                        <ul className="space-y-[clamp(0.75rem,1.5vw,1rem)] text-[clamp(0.875rem,1.2vw,0.95rem)] text-white/70">
                            {['Cold Brew Series', 'Thermal Series', 'City Collection', 'Accessories'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Third List Customer Support */}
                    <div>
                        <h4 className="font-medium mb-[clamp(1rem,2vw,1.5rem)] text-[clamp(1.125rem,1.5vw,1.25rem)] tracking-wide">
                            Customer Care
                        </h4>
                        <ul className="space-y-[clamp(0.75rem,1.5vw,1rem)] text-[clamp(0.875rem,1.2vw,0.95rem)] text-white/70">
                            {['Find a Store', 'Shipping Policy', 'Returns & Exchanges', 'FAQ'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Forth List：About Company */}
                    <div>
                        <h4 className="font-medium mb-[clamp(1rem,2vw,1.5rem)] text-[clamp(1.125rem,1.5vw,1.25rem)] tracking-wide">
                            About Us
                        </h4>
                        <ul className="space-y-[clamp(0.75rem,1.5vw,1rem)] text-[clamp(0.875rem,1.2vw,0.95rem)] text-white/70">
                            {['Our Story', 'Sustainability', 'Social Impact', 'Careers'].map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* --- Bottom Bar Notification --- */}
                <div className="border-t border-white/20 pt-[clamp(1.5rem,3vw,2rem)] flex flex-col md:flex-row justify-between items-center gap-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.75rem,1vw,0.875rem)] text-white/60">
                    <p className="text-center md:text-left">
                        © {currentYear} Starbucks Corporation. All rights reserved.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-x-[clamp(1rem,3vw,2rem)] gap-y-2">
                        {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((item, index) => (
                            <a key={index} href="#" className="hover:text-white transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
                
            </div>
        </footer>
    );
}