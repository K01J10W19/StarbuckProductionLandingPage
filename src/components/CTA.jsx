import React from 'react'
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { MapPin, Store, Phone } from "lucide-react";

const carouselImages = [
    [
        "https://images.unsplash.com/photo-1723110568223-f83071ddd4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGxpZmVzdHlsZSUyMGdyZWVufGVufDF8fHx8MTc3NDM2NDA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1769797418863-a1b908adceb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBtdWclMjBtb3JuaW5nJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc3NDM2NDA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    [
        "https://images.unsplash.com/photo-1675395594169-c6b14260e271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHJldXNhYmxlJTIwdHVtYmxlciUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzQzNjQwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1758221056836-e5b235180762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBoYW5kcyUyMGNvenl8ZW58MXx8fHwxNzc0MzY0MDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    [
        "https://images.unsplash.com/photo-1565692936545-c23bd329340a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyYnVja3MlMjBjdXAlMjBjb2ZmZWUlMjBtaW5pbWFsfGVufDF8fHx8MTc3NDM2NDA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1704018731170-f30899f60917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1bGF0ZWQlMjB3YXRlciUyMGJvdHRsZSUyMGJsYWNrfGVufDF8fHx8MTc3NDM2NDA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
];

const items = [
    {   
        icon: MapPin, 
        title: "Find a Store", 
        description: "Locate the nearest Starbucks to you", 
        action: "View Map" 
    },
    { 
        icon: Store, 
        title: "Online Shop", 
        description: "Browse the full collection with delivery", 
        action: "Shop Now" 
    },
    { 
        icon: Phone, 
        title: "Customer Service", 
        description: "Our team is here to answer your questions", 
        action: "Contact Us" 
    }
]

export function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [currentImageSet, setCurrentImageSet] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageSet((prev) => (prev + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={ref} className="relative py-[clamp(4rem,10vw,8rem)] px-[clamp(1.5rem,5vw,3rem)] overflow-hidden bg-white">
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1732385592330-65f01726845c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBncmVlbnxlbnwxfHx8fDE3NzQzNjQwODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')` }}
            />

            <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-white/80 to-white" />

            <div className="container mx-auto max-w-7xl relative z-10">
                
                {/* --- Title --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-[clamp(3rem,8vw,5rem)]"
                >
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light text-(--starbucks-green) mb-[clamp(1rem,3vw,1.5rem)] tracking-tight">
                        Visit Our Stores
                    </h2>
                    <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Experience the quality and craftsmanship in person. Our baristas are ready to help you find your perfect cup.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,3vw,2.5rem)] mb-[clamp(4rem,8vw,6rem)]">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="bg-white/80 backdrop-blur-md rounded-[clamp(1rem,2vw,1.5rem)] p-[clamp(1.5rem,3vw,2.5rem)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-(--starbucks-light-green) group cursor-pointer flex flex-col items-center md:items-start text-center md:text-left h-full"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="inline-flex items-center justify-center w-[clamp(3.5rem,6vw,4.5rem)] h-[clamp(3.5rem,6vw,4.5rem)] mb-[clamp(1rem,2vw,1.5rem)] bg-(--starbucks-light-green) rounded-full group-hover:bg-(--starbucks-green) transition-colors duration-300 shadow-sm"
                            >
                                <item.icon className="w-7 h-7 md:w-8 md:h-8 text-(--starbucks-green) group-hover:text-white transition-colors duration-300" />
                            </motion.div>
                            
                            <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-medium text-(--starbucks-green) mb-2">
                                {item.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-[clamp(1.5rem,3vw,2rem)] text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed flex-grow">
                                {item.description}
                            </p>
                            
                            <button className="text-(--starbucks-green) font-semibold group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2 mt-auto text-[clamp(0.875rem,1.5vw,1rem)] cursor-pointer">
                                {item.action}
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* --- Dynamic dual-image carousel --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(1.5rem,3vw,2rem)] relative mb-[clamp(4rem,10vw,8rem)]"
                >
                {/* 左图 (所有设备可见) */}
                <div className="relative h-[clamp(250px,40vw,400px)] rounded-[clamp(1.5rem,3vw,2rem)] overflow-hidden shadow-2xl group">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={`left-${currentImageSet}`}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            src={carouselImages[currentImageSet][0]}
                            alt="Lifestyle Left"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* 右图 (仅平板 md 以上可见，优化手机端性能和排版) */}
                <div className="hidden md:block relative h-[clamp(250px,40vw,400px)] rounded-[clamp(1.5rem,3vw,2rem)] overflow-hidden shadow-2xl group">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={`right-${currentImageSet}`}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }} 
                            src={carouselImages[currentImageSet][1]}
                            alt="Lifestyle Right"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Scroll Indicator */}
                <div className="absolute -bottom-[clamp(2rem,4vw,3rem)] left-1/2 transform -translate-x-1/2 flex gap-3">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageSet(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                            currentImageSet === index
                                ? "bg-(--starbucks-green) w-8 shadow-md"
                                : "bg-gray-300 w-2 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                </motion.div>

                {/* --- Newsletter 订阅 --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-(--starbucks-green) rounded-[clamp(1.5rem,4vw,2.5rem)] p-[clamp(2rem,5vw,4rem)] text-center text-white shadow-2xl relative overflow-hidden"
                >

                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-(--starbucks-light-green)/10 blur-[80px] rounded-full pointer-events-none" />

                    <h3 className="text-[clamp(1.75rem,4vw,2.5rem)] font-light mb-[clamp(1rem,2vw,1.5rem)] relative z-10">
                        Subscribe to Starbucks News
                    </h3>
                    <p className="text-white/90 mb-[clamp(2rem,4vw,3rem)] max-w-2xl mx-auto text-[clamp(1rem,2vw,1.125rem)] relative z-10">
                        Be the first to know about new releases, limited editions, and exclusive offers.
                    </p>
                    
                    {/* Input Frame */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-xl mx-auto relative z-10 w-full px-2 sm:px-0">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-[clamp(1.5rem,3vw,2rem)] py-[clamp(1rem,2vw,1.25rem)] rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all duration-300 text-[clamp(0.875rem,1.5vw,1rem)]"
                        />
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full sm:w-auto px-[clamp(2rem,4vw,3rem)] py-[clamp(1rem,2vw,1.25rem)] bg-white text-(--starbucks-green) rounded-full hover:bg-(--starbucks-light-green) transition-all duration-300 shadow-xl font-medium text-[clamp(0.875rem,1.5vw,1rem)] cursor-pointer"
                        >
                            Subscribe
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}