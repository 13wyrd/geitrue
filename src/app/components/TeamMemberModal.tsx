import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Send } from "lucide-react";

interface TeamMember {
  name: string;
  age: string;
  image: string;
  description: string;
  telegram: string;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative bg-black border-2 border-red-600 rounded-2xl max-w-2xl w-full overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.6)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
                  {member.name}
                </h2>
                <p className="text-red-400 text-lg md:text-xl mt-2 mb-4">
                  {member.age}
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {member.description}
                </p>
              </div>

              <a
                href={member.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] uppercase tracking-wider"
              >
                <Send size={20} />
                Написать пидорку
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}