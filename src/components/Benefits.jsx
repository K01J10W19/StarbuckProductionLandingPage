import React from 'react'
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Leaf, DollarSign, Users, Award } from "lucide-react";

const benefits = [
    {
        icon: Leaf,
        title: "Environmental Mission",
        description: "Reducing millions of single-use cups annually",
        stats: "1 cup = 500 disposables",
    },
    {
        icon: DollarSign,
        title: "Instant Savings",
        description: "Save $0.50 on every beverage with your own cup",
        stats: "Save $180+ annually",
    },
    {
        icon: Users,
        title: "Community Impact",
        description: "Join millions of eco-conscious advocates worldwide",
        stats: "5M+ eco partners",
    },
    {
        icon: Award,
        title: "Quality Guarantee",
        description: "Lifetime warranty for peace of mind",
        stats: "99% satisfaction rate",
    }
];

export function Benefits() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section ref={ref} className="py-[clamp(4rem,10vw,8rem)] px-[clamp(1.5rem,5vw,3rem)] bg-(--starbucks-green) text-white relative overflow-hidden">
            
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                
                {/* --- Title --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-[clamp(3rem,8vw,5rem)] px-4"
                >
                    <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-light mb-[clamp(1rem,3vw,1.5rem)] leading-tight tracking-tight">
                        Choose Sustainable, Choose Better
                    </h2>
                    <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Using a reusable cup isn't just an eco-friendly choice—it's a responsible lifestyle.
                        <br className="hidden md:block" />
                        Every choice you make contributes to a healthier planet.
                    </p>
                </motion.div>

                {/* --- Stats Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(1.5rem,3vw,2rem)] mb-[clamp(4rem,8vw,6rem)]">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="bg-white/10 backdrop-blur-sm rounded-[clamp(1rem,2vw,1.5rem)] p-[clamp(1.5rem,3vw,2rem)] hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group flex flex-col items-center text-center h-full border border-white/5"
                        >
                            <motion.div
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="flex items-center justify-center w-[clamp(4rem,6vw,5rem)] h-[clamp(4rem,6vw,5rem)] mb-[clamp(1rem,3vw,1.5rem)] bg-(--starbucks-light-green) rounded-full group-hover:bg-white transition-colors duration-300 shadow-lg"
                            >
                                <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-(--starbucks-green)" />
                            </motion.div>
                            
                            <h3 className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-medium mb-[clamp(0.5rem,2vw,1rem)]">
                                {benefit.title}
                            </h3>
                            
                            <p className="text-white/80 text-[clamp(0.875rem,1.5vw,1rem)] mb-6 leading-relaxed flex-grow">
                                {benefit.description}
                            </p>
                            
                            <div className="mt-auto pt-4 border-t border-white/20 w-full">
                                <div className="bg-black/20 rounded-xl px-4 py-[clamp(0.75rem,2vw,1rem)] backdrop-blur-sm group-hover:bg-black/30 transition-colors h-[5.5rem] flex items-center justify-center">
                                    <p className="text-(--starbucks-light-green) font-semibold text-[clamp(1rem,2vw,1.125rem)] tracking-wide">
                                        {benefit.stats}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- CTA Card --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg rounded-[clamp(1.5rem,4vw,2.5rem)] p-[clamp(2rem,5vw,4rem)] text-center max-w-4xl mx-auto border border-white/20 shadow-2xl relative overflow-hidden"
                >

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-white/10 blur-[50px] rounded-full pointer-events-none" />

                    <h3 className="text-[clamp(1.75rem,4vw,2.5rem)] font-light mb-[clamp(1rem,3vw,1.5rem)] relative z-10">
                        Start Your Sustainable Journey Today
                    </h3>
                    <p className="text-white/90 mb-[clamp(2rem,4vw,3rem)] text-[clamp(1rem,2vw,1.125rem)] relative z-10 max-w-2xl mx-auto leading-7">
                        Every small change makes a big difference. Join us in making a positive impact on our planet.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-[clamp(1rem,2vw,1.5rem)] justify-center relative z-10 w-full sm:w-auto px-4 sm:px-0">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full sm:w-auto px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2vw,1.25rem)] bg-white text-(--starbucks-green) rounded-full hover:bg-(--starbucks-light-green) transition-colors duration-300 shadow-xl font-medium text-[clamp(0.875rem,1.5vw,1rem)] cursor-pointer"
                        >
                            Shop Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full sm:w-auto px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2vw,1.25rem)] border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors duration-300 font-medium text-[clamp(0.875rem,1.5vw,1rem)] cursor-pointer"
                        >
                            Learn About Our Impact
                        </motion.button>
                    </div>
                </motion.div>
                
            </div>
        </section>
    )
}
