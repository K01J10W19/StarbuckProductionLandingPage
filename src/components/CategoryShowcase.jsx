import React from 'react'
import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Snowflake, Flame, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductModal } from "./ProductModal";

const categories = [
    {
        id: "cold",
        name: "Cold Brew Collection",
        icon: Snowflake,
        description: "Crafted for refreshing moments",
        products: [
            {
                name: "Iced Classic Tumbler",
                image: "https://images.unsplash.com/photo-1749105504671-fe5ccd2180a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGN1cCUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzc0MzY0MDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                price: "$24.95",
                description: "The perfect companion for your iced beverages. Features double-wall insulation to keep drinks cold for hours while preventing condensation.",
                story: "Inspired by the vibrant energy of summer mornings, this tumbler was designed to capture the essence of refreshment. Each curve has been carefully crafted to fit comfortably in your hand while making a statement.",
                features: ["Double-wall vacuum insulation", "Anti-condensation exterior", "BPA-free materials", "Dishwasher safe", "Fits most cup holders", "Splash-proof lid"],
                specifications: { capacity: "16 oz (473ml)", material: "Stainless Steel", dimensions: '3.5" × 6.8"' }
            },
            {
                name: "Cold Brew Pitcher",
                image: "https://images.unsplash.com/photo-1545425523-6be3b91fbeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyYnVja3MlMjB0dW1ibGVyJTIwd2hpdGUlMjBjbGVhbnxlbnwxfHx8fDE3NzQzODUyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                price: "$32.95",
                description: "Brew and serve cold coffee perfection. The integrated filter system ensures smooth, rich flavor every time.",
                story: "Born from our passion for cold brew coffee, this pitcher brings café-quality beverages to your home. It's not just a container—it's a brewing revolution.",
                features: ["Built-in brewing filter", "Large capacity design", "Airtight seal", "Easy-pour spout", "Refrigerator-safe", "Premium glass construction"],
                specifications: { capacity: "48 oz (1.4L)", material: "Borosilicate Glass", dimensions: '5" × 9.5"' }
            },
            {
                name: "Arctic Series Bottle",
                image: "https://images.unsplash.com/photo-1675395594169-c6b14260e271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHJldXNhYmxlJTIwdHVtYmxlciUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzQzNjQwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                price: "$28.95",
                description: "Maximum cooling power in a sleek, portable design. Keeps beverages icy cold for up to 24 hours.",
                story: "Engineered for adventurers and everyday heroes alike. This bottle has traveled from arctic expeditions to urban commutes, proving that style and function can coexist beautifully.",
                features: ["24-hour cold retention", "Powder-coated finish", "Wide mouth opening", "Leak-proof cap", "Eco-friendly coating", "Lifetime warranty"],
                specifications: { capacity: "20 oz (591ml)", material: "304 Stainless Steel", dimensions: '3.2" × 10"' }
            }                                                                                       
        ]
    },
    {
        id: "thermal",
        name: "Thermal Collection",
        icon: Flame,
        description: "Preserving warmth in every sip",
        products: [
            {
                name: "Thermal Elite Tumbler",
                image: "https://images.unsplash.com/photo-1704018731170-f30899f60917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1bGF0ZWQlMjB3YXRlciUyMGJvdHRsZSUyMGJsYWNrfGVufDF8fHx8MTc3NDM2NDA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                price: "$29.95",
                description: "Professional-grade thermal technology keeps your beverages at the perfect temperature for 6+ hours.",
                story: "Created in collaboration with thermal engineering experts, this tumbler represents the pinnacle of temperature retention technology. Every detail serves a purpose.",
                features: ["6-hour heat retention", "304 stainless steel interior", "Copper insulation layer", "Ergonomic grip design", "Easy-clean lid", "Scratch-resistant finish"],
                specifications: { capacity: "20 oz (591ml)", material: "Premium Stainless Steel", dimensions: '3.6" × 7.2"' }
            },
            {
                name: "Commuter Thermal Mug",
                image: "https://images.unsplash.com/photo-1636897723338-044840ff6d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0aGVybW9zJTIwYmxhY2slMjBtaW5pbWFsfGVufDF8fHx8MTc3NDM4NTIxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                price: "$26.95",
                description: "Designed for life on the move. Fits perfectly in your car cup holder while maintaining optimal temperature.",
                story: "Understanding the rhythm of modern life, we designed this mug for the daily commute. It's your reliable companion from home to work and everywhere in between.",
                features: ["One-handed operation", "Spill-proof lid", "360° drinking rim", "Cup holder friendly", "4-hour heat retention", "Matte black finish"],
                specifications: { capacity: "16 oz (473ml)", material: "Stainless Steel", dimensions: '3.4" × 6.5"' }
            },
            {
                name: "Heritage Thermal Bottle",
                image: "https://images.unsplash.com/photo-1588793076577-4c2b666452d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBjb2ZmZWUlMjBtdWclMjBzdGVlbHxlbnwxfHx8fDE3NzQzODUyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                price: "$34.95",
                description: "A timeless design meets modern thermal innovation. This bottle is an investment in quality that lasts.",
                story: "Inspired by classic thermos designs from the golden age of exploration, updated with cutting-edge insulation technology for the modern adventurer.",
                features: ["8-hour heat retention", "Premium copper lining", "Classic twist-cap design", "Extra-wide opening", "Travel-friendly size", "Heritage series exclusive"],
                specifications: { capacity: "24 oz (710ml)", material: "Premium Steel & Copper", dimensions: '3.8" × 10.5"' }
            }
        ]
    },
    {
        id: "city",
        name: "City Series",
        icon: MapPin,
        description: "Collecting memories from every city",
        products: [
            {
                name: "Tokyo Sakura Edition",
                image: "https://images.unsplash.com/photo-1675395594169-c6b14260e271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHJldXNhYmxlJTIwdHVtYmxlciUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzQzNjQwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                price: "$39.95",
                description: "Limited edition design celebrating Tokyo's iconic cherry blossom season. Each piece is a collector's treasure.",
                story: "Capturing the ephemeral beauty of Tokyo in spring, this design features hand-illustrated sakura blossoms. Only 5,000 pieces produced worldwide.",
                features: ["Limited edition numbered", "Hand-illustrated artwork", "Premium ceramic coating", "Gift box included", "Collector's certificate", "City-exclusive design"],
                specifications: { capacity: "16 oz (473ml)", material: "Ceramic-Coated Steel", dimensions: '3.5" × 7"' }
            },
            {
                name: "New York Skyline",
                image: "https://images.unsplash.com/photo-1704018731170-f30899f60917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1bGF0ZWQlMjB3YXRlciUyMGJvdHRsZSUyMGJsYWNrfGVufDF8fHx8MTc3NDM2NDA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                price: "$37.95",
                description: "The city that never sleeps deserves a tumbler that keeps up. Features NYC's iconic skyline silhouette.",
                story: "Inspired by countless coffee runs through Manhattan streets. This design celebrates the energy, diversity, and unstoppable spirit of New York City.",
                features: ["Skyline relief design", "Metallic finish accents", "Premium grip texture", "NYC store exclusive", "Limited seasonal release", "Urban collection series"],
                specifications: { capacity: "20 oz (591ml)", material: "Stainless Steel", dimensions: '3.6" × 7.5"' }
            },
            {
                name: "Paris Elegance",
                image: "https://images.unsplash.com/photo-1749105504671-fe5ccd2180a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGN1cCUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzc0MzY0MDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                price: "$42.95",
                description: "Parisian sophistication meets coffee culture. An elegant design inspired by the City of Light.",
                story: "Designed in collaboration with Parisian artists, this piece embodies the elegance and romance of French café culture. A true work of art.",
                features: ["Artist collaboration", "Gold accent details", "Matte elegant finish", "Paris exclusive pattern", "Premium packaging", "Collectible series"],
                specifications: { capacity: "14 oz (414ml)", material: "Premium Ceramic Steel", dimensions: '3.2" × 6.8"' }
            }
        ]
    }
];

export function CategoryShowcase() {
    const [activeCategory, setActiveCategory] = useState("cold");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const scrollContainerRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    
    const activeCategoryData = categories.find((cat) => cat.id === activeCategory);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth < 768 ? 300 : 450;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    const openProductModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    
    return (
        <section ref={ref} className="py-[clamp(4rem,10vw,8rem)] px-0 md:px-6 bg-(--starbucks-cream) overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-[clamp(2.5rem,6vw,4rem)] px-6"
                >
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light text-(--starbucks-green) mb-4 tracking-tight">
                        Featured Collections
                    </h2>
                    <p className="text-[clamp(1rem,2vw,1.125rem)] text-gray-600">
                        Each collection designed for different moments in your life
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                // {/* 移动端横向滚动防拥挤，PC端自动换行居中 */}
                    className="flex md:justify-center gap-[clamp(0.5rem,2vw,1rem)] mb-[clamp(2rem,5vw,4rem)] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-6 md:px-0 pb-4"
                >
                    {/* --- Category  Distribute Button --- */}
                    {categories.map((category, index) => (
                        <motion.button
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            onClick={() => setActiveCategory(category.id)}
                            className={`whitespace-nowrap flex-shrink-0 px-[clamp(1.5rem,4vw,2rem)] py-[clamp(0.75rem,2vw,1rem)] rounded-full transition-all duration-300 flex items-center gap-2 md:gap-3 text-[clamp(0.875rem,1.5vw,1rem)] font-medium cursor-pointer ${
                                activeCategory === category.id
                                ? "bg-(--starbucks-green) text-white shadow-lg md:scale-105"
                                : "bg-white text-(--starbucks-green) hover:bg-(--starbucks-light-green)"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <category.icon className="w-[clamp(1rem,2vw,1.25rem)] h-[clamp(1rem,2vw,1.25rem)]" />
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* --- Category Description --- */}
                <motion.div
                    key={activeCategory} // 切换类目时触发动画
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center max-w-2xl mx-auto mb-[clamp(2rem,5vw,3rem)] px-6"
                >
                    <p className="text-[clamp(1.125rem,2.5vw,1.25rem)] text-(--starbucks-green) italic font-light">
                        "{activeCategoryData.description}"
                    </p>
                </motion.div>

                {/* --- Products Carousel --- */}
                <div className="relative group">
                    {/* 电脑端悬浮箭头 (手机端隐藏，依靠手势滑动) */}
                    <button
                        onClick={() => scroll("left")}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 -translate-x-6 opacity-0 group-hover:opacity-100 cursor-pointer"
                    >
                        <ChevronLeft className="w-6 h-6 text-(--starbucks-green)" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 translate-x-6 opacity-0 group-hover:opacity-100 cursor-pointer"
                    >
                        <ChevronRight className="w-6 h-6 text-(--starbucks-green)" />
                    </button>

                    {/* Carousel Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-[clamp(1rem,3vw,2rem)] overflow-x-auto scroll-smooth px-6 md:px-4 py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
                    >
                        {activeCategoryData.products.map((product, index) => (
                            <motion.div
                                key={`${activeCategory}-${index}`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                // {/* 流式卡片宽度：手机上占满大部分，平板/电脑维持精致比例 */}
                                className="snap-center flex-shrink-0 w-[85vw] md:w-[clamp(20rem,30vw,24rem)] bg-white rounded-[clamp(1rem,2vw,1.5rem)] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group/card flex flex-col"
                            >
                                {/* Product Image */}
                                <div className="relative h-[clamp(16rem,35vw,22rem)] overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                                    
                                    <div className="absolute bottom-0 left-0 right-0 p-[clamp(1rem,2vw,1.5rem)] transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                                        <p className="text-white text-[clamp(1.25rem,2.5vw,1.5rem)] font-light mb-1 tracking-wide">
                                            {product.name}
                                        </p>
                                        <p className="text-(--starbucks-light-green) text-[clamp(1rem,2vw,1.125rem)] font-medium">
                                            {product.price}
                                        </p>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-[clamp(1.25rem,3vw,1.5rem)] flex flex-col flex-grow justify-between">
                                    <p className="text-gray-600 text-[clamp(0.875rem,1.5vw,1rem)] mb-6 line-clamp-2 leading-relaxed">
                                        {product.description}
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => openProductModal(product)}
                                        className="w-full py-[clamp(0.75rem,2vw,1rem)] bg-(--starbucks-green) text-white text-[clamp(0.875rem,1.5vw,1rem)] font-medium rounded-full hover:bg-[#00704a] transition-colors duration-300 shadow-md cursor-pointer"
                                    >
                                        View Details
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    )
}

