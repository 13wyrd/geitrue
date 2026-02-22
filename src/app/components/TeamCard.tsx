import { motion } from "motion/react";

interface TeamCardProps {
  name: string;
  image: string;
  isActive: boolean;
  onClick: () => void;
}

export function TeamCard({ name, image, isActive, onClick }: TeamCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-[320px] md:w-[400px] lg:w-[450px] cursor-pointer snap-center p-2"
      animate={{ scale: isActive ? 1.02 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl h-[450px] md:h-[550px] border-4 border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] transition-shadow duration-300">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black py-4 px-6">
          <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wider">
            {name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}