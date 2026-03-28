import React from 'react'
import { motion } from "motion/react";
import { Coffee, ArrowDown } from "lucide-react";

import starbucksLogo from '../assets/icons/logo.svg';
import starbucksCup from '../assets/images/HeroSection_Img.webp';

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex flex-col w-full items-center justify-between py-8 md:py-12 overflow-hidden">
            {/* Background Image with Overlay */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <img
                    src={starbucksCup}
                    alt="Starbucks Cup"
                    className="w-full h-full object-cover object-center"
                />
                {/* Enhanced gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                {/* Additional dark vignette */}
                <div className="absolute inset-0 bg-radial-gradient opacity-50" style={{
                background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)'
                }} />
            </motion.div>

            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex-none mt-2"
            >
                <img src={starbucksLogo} alt="Starbucks Logo" className="w-16 h-16 md:w-20 md:h-20 block object-contain drop-shadow-lg" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center items-center w-full px-4 md:px-6 text-center z-10">
                {/* Main Headline */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    {/* 使用更新过的流式 clamp，防止大屏高度溢出 */}
                    <h1 className="whitespace-nowrap text-[clamp(2.5rem,8vw,7.5rem)] font-light text-white mb-2 md:mb-4 tracking-tighter leading-none">
                        <span className="block bg-gradient-to-r from-white via-white to-(--starbucks-light-green) bg-clip-text text-transparent drop-shadow-2xl">
                            Not Just a Cup
                        </span>
                    </h1>
                    <p className="text-[clamp(1.5rem,5vw,4.5rem)] font-light italic bg-gradient-to-r from-(--starbucks-light-green) via-white to-white bg-clip-text text-transparent drop-shadow-2xl">
                        But a Companion
                    </p>
                </motion.div>

                {/* Subtitle - 调整了 marginTop 节省垂直空间 */}
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-6 md:mt-8 text-lg md:text-xl text-white/95 max-w-2xl mx-auto font-light leading-relaxed backdrop-blur-sm bg-black/30 py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg font-comic-reg"
                >
                    Elevate your daily ritual with sustainable style
                </motion.p>

                {/* Buttons - 使用 wrap 防止手机端挤压 */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full mt-6 md:mt-8 mb-6 md:mb-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-[80%] sm:w-auto px-8 py-3.5 bg-(--starbucks-green) text-white text-base md:text-lg rounded-full hover:bg-[#00704a] transition-all duration-300 shadow-xl border-2 border-transparent hover:border-white/20 font-medium cursor-pointer"
                    >
                        Explore Collection
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-[80%] sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-md text-white text-base md:text-lg rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white/50 font-medium cursor-pointer"
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator - Enhanced */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="flex-none flex flex-col items-center z-10 mb-4"
            >
                <span className="text-white text-xs md:text-sm tracking-[0.2em] mb-3 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
                    Scroll to explore
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm bg-black/20" // 加了一点黑底确保可见度
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-white rounded-full mt-2 drop-shadow-md"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
