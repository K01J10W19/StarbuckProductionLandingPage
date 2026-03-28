import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, MapPin } from "lucide-react";

export function ProductModal({ product, isOpen, onClose }) {
    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Wrapper - 使用了更严谨的安全区控制 */}
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-none">
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-[clamp(1.5rem,3vw,2rem)] max-w-6xl w-full max-h-[90vh] flex flex-col lg:flex-row overflow-hidden shadow-2xl pointer-events-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 lg:top-6 lg:right-6 z-20 p-2.5 bg-white/80 backdrop-blur-md rounded-full hover:bg-gray-100 hover:rotate-90 transition-all duration-300 shadow-sm cursor-pointer"
                            >
                                <X className="w-6 h-6 text-gray-800" />
                            </button>

                            {/* 左侧：产品主图 (电脑端固定高度，手机端自适应) */}
                            <div className="relative w-full lg:w-1/2 h-[40vh] min-h-[300px] lg:h-auto lg:min-h-[600px] flex-shrink-0 bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                
                                <div className="absolute bottom-0 left-0 p-[clamp(1.5rem,4vw,3rem)] w-full">
                                    <motion.h2 
                                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                                        className="text-[clamp(2rem,4vw,3rem)] font-light text-white leading-tight mb-2"
                                    >
                                        {product.name}
                                    </motion.h2>
                                    <motion.p 
                                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                                        className="text-[clamp(1.5rem,2.5vw,2rem)] text-(--starbucks-light-green) font-light"
                                    >
                                        {product.price}
                                    </motion.p>
                                </div>
                            </div>

                            {/* 右侧：产品信息区 (可独立滚动) */}
                            <div className="w-full lg:w-1/2 overflow-y-auto p-[clamp(1.5rem,4vw,3rem)] bg-white [scrollbar-width:thin]">
                                
                                {/* Description */}
                                <div className="mb-[clamp(1.5rem,3vw,2.5rem)]">
                                    <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-medium text-gray-900 mb-3">
                                        Overview
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-[clamp(0.95rem,1.2vw,1.1rem)]">
                                        {product.description}
                                    </p>
                                </div>

                                {/* The Story */}
                                <div className="mb-[clamp(1.5rem,3vw,2.5rem)] bg-[#F9F7F4] rounded-2xl p-[clamp(1.25rem,2vw,1.5rem)] border border-[#EBE5D9]">
                                    <h3 className="text-[clamp(1.1rem,1.5vw,1.25rem)] font-medium text-(--starbucks-green) mb-2">
                                        The Design Story
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed italic text-[clamp(0.9rem,1.1vw,1rem)]">
                                        "{product.story}"
                                    </p>
                                </div>

                                {/* Features & Specifications (Grid Layout) */}
                                <div className="grid sm:grid-cols-2 gap-[clamp(1.5rem,3vw,2rem)] mb-[clamp(2rem,4vw,3rem)]">
                                
                                    {/* Features */}
                                    <div>
                                        <h3 className="text-[clamp(1.1rem,1.5vw,1.25rem)] font-medium text-gray-900 mb-3 md:mb-4">
                                            Key Features
                                        </h3>
                                        <ul className="space-y-2.5">
                                            {product.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 bg-(--starbucks-green) rounded-full mt-2 flex-shrink-0" />
                                                    <span className="text-gray-600 text-[clamp(0.9rem,1.1vw,1rem)]">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Specs */}
                                    <div>
                                        <h3 className="text-[clamp(1.1rem,1.5vw,1.25rem)] font-medium text-gray-900 mb-3 md:mb-4">
                                            Specifications
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-gray-500 text-sm">Capacity</span>
                                                <span className="text-gray-900 font-medium text-sm text-right">{product.specifications.capacity}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-100 pb-2">
                                                <span className="text-gray-500 text-sm">Material</span>
                                                <span className="text-gray-900 font-medium text-sm text-right">{product.specifications.material}</span>
                                            </div>
                                            <div className="flex justify-between pb-2">
                                                <span className="text-gray-500 text-sm">Dimensions</span>
                                                <span className="text-gray-900 font-medium text-sm text-right">{product.specifications.dimensions}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-auto pt-4 border-t border-gray-100">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}    
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-(--starbucks-green) text-white rounded-full hover:bg-[#00704a] transition-all duration-300 font-medium shadow-md cursor-pointer"
                                    >
                                        <ShoppingBag className="w-5 h-5" />
                                        Add to Cart
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-(--starbucks-cream) text-(--starbucks-green) rounded-full hover:bg-[#EBE5D9] transition-all duration-300 font-medium cursor-pointer"
                                    >
                                        <MapPin className="w-5 h-5" />
                                        Find in Store
                                    </motion.button>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}