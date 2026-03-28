import React from 'react'
import { useRef } from "react";
import { motion, useInView } from "motion/react"; 
import { Sparkles, Hand, Heart } from "lucide-react";

import PhilosophyImg from '../assets/images/Philosophy_Img.webp';

const philosophies = [
    {
        icon: Hand,
        title: "Tactile Experience",
        description: "Every grip is a warm embrace",
        detail: "From matte textures to refined touch, we believe great design starts at your fingertips.",
    },
    {
        icon: Sparkles,
        title: "Minimalist Aesthetic",
        description: "Removing complexity, revealing essence",
        detail: "Simple yet sophisticated. Every curve has been refined to present the purest design language.",
    },
    {
        icon: Heart,
        title: "Emotional Connection",
        description: "More than a vessel, a lifestyle statement",
        detail: "Each cup carries your story, accompanying you through every meaningful moment.",
    },
];

export function Philosophy() {
    const ref = useRef(null);
    // once: true 确保动画只触发一次，避免上下滚动时反复闪烁消耗性能
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-[clamp(4rem,10vw,8rem)] px-[clamp(1.5rem,5vw,3rem)] bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-[clamp(3rem,8vw,5rem)]"
                >

                    <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-light text-(--starbucks-green) mb-[clamp(1rem,3vw,1.5rem)] tracking-tight">
                        Our Philosophy
                    </h2>

                    <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                        We believe a perfect cup is more than just a container for beverages.
                        <br className="hidden md:block" />
                        It's a pursuit of quality and a celebration of beautiful moments.
                    </p>
                </motion.div>

                {/* --- 核心特征 Grid 布局 --- 
                    4. 断点管理：
                    - 默认 (390px - 640px): 1 列 (grid-cols-1)
                    - md (768px): 依然建议 1列 或 2列，防止卡片太挤。这里用 md:grid-cols-3
                    - lg (1024px) / xl (1280px): 完美展示 3 列
                    - gap 使用 clamp 实现流式间距
                */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(2rem,6vw,4rem)]">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="text-center group flex flex-col items-center"
                        >

                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="inline-flex items-center justify-center w-[clamp(4rem,8vw,5rem)] h-[clamp(4rem,8vw,5rem)] mb-6 bg-(--starbucks-light-green) rounded-full group-hover:bg-(--starbucks-green) transition-colors duration-300 shadow-sm"
                            >
                                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-(--starbucks-green) group-hover:text-white transition-colors duration-300" />
                            </motion.div>
                            
                            <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-medium text-(--starbucks-green) mb-4">
                                {item.title}
                            </h3>
                            <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-800 font-medium mb-3">
                                {item.description}
                            </p>
                            <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-500 leading-relaxed max-w-[280px] md:max-w-none">
                                {item.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-[clamp(4rem,10vw,6rem)] rounded-[clamp(1.5rem,4vw,2.5rem)] overflow-hidden shadow-2xl relative group"
                >
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={PhilosophyImg}
                    alt="Coffee cup in hands"
                    className="w-full h-[clamp(300px,40vw,500px)] object-cover"
                />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-gradient-to-t from-(--starbucks-green)/90 via-(--starbucks-green)/40 to-transparent flex items-end justify-center pb-[clamp(2rem,5vw,4rem)]"
                    >
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            className="text-white text-[clamp(1.25rem,3vw,2rem)] font-light italic drop-shadow-md px-6 text-center font-comic-reg"
                        >
                            Crafted with care, designed for you
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}