import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { TeamCard } from "./components/TeamCard";
import { TeamMemberModal } from "./components/TeamMemberModal";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  age: string;
  telegram: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Миша",
    role: "карлик ебаный",
    age: "27 лет",
    image: "/images/misha.jpg",
    description: "Мелкий жирный хуесос 168 см, пузо и сиськи второго размера, жопа в стрингах еле влезает. Сразу «папочка, трахни жирненького послушного мальчика жёстко». Хуй утоплен в сале, кончает за 20 сек и орёт как свинья. Фоткает себя в зеркале с уточкой и спермой на пузе — «best cum 💦»",
    telegram: "https://t.me/mi8fca"
  },
  {
    name: "Серго",
    role: "альфа-пидор",
    age: "26 лет",
    image: "/images/sergo.jpg",
    description: "Старый пузатый пидор с плешью. В 4 утра «я не гей, но… еби меня как последнюю суку». Через 10 мин удаляет чат и забывает. Классический скрытый пидорас.",
    telegram: "https://t.me/undww"
  },
  {
    name: "Дмитрий",
    role: "главный пидор",
    age: "27 лет",
    image: "/images/dmitry.jpg",
    description: "Бородатый пидор с пробитой жопой — дырка как туннель после тысяч хуёв. Орёт «ебать меня в разъёбанную жопу, я шлюха», потом ноет «никто не хочет серьёзного». Фоткает разъёбанную розочку крупняком «готов к фистингу 24/7». Кончает от кулака, любит литры внутрь и «папочку» — хотя сам давно помойка.",
    telegram: "https://t.me/Moyses12"
  },
  {
    name: "Даня",
    role: "натуральный пидор",
    age: "25 лет",
    image: "/images/danya.jpg",
    description: "Бородатый белобрысый «натурал». Борода рыжая клочками, в профиле «только девки, пидоры в бан». Через 3 сообщения «а если честно, никогда не пробовал с пацаном… скинь свой, чисто посмотреть, я не гей блять». Дрочит на мужские жопы и кончает за 15 сек. Классический «натурал» с пидорством в башке.",
    telegram: "https://t.me/Tw1zs"
  }
];

export default function App() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Auto-play music on mount
  useEffect(() => {
    audioRef.current = new Audio('/music/background.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    // Try to autoplay (may be blocked by browser)
    const playPromise = audioRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Autoplay was prevented:', error);
        // Add click listener to start music on first user interaction
        const handleFirstInteraction = () => {
          audioRef.current?.play();
          document.removeEventListener('click', handleFirstInteraction);
        };
        document.addEventListener('click', handleFirstInteraction);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Duplicate cards for infinite loop
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  const handleCardClick = (member: TeamMember) => {
    // Find the original member from teamMembers array by name
    const originalMember = teamMembers.find(m => m.name === member.name);
    setSelectedMember(originalMember || member);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Red glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-red-950/30 via-black to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-6 md:pt-40 md:pb-8 flex flex-col items-center justify-center px-4">
          <motion.h1
            className="text-5xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-red-600 uppercase text-center tracking-wider whitespace-nowrap"
            style={{
              textShadow: "0 0 20px rgba(255,0,0,0.8), 0 0 40px rgba(255,0,0,0.6), 0 0 60px rgba(255,0,0,0.4)"
            }}
            animate={{
              textShadow: [
                "0 0 20px rgba(255,0,0,0.8), 0 0 40px rgba(255,0,0,0.6), 0 0 60px rgba(255,0,0,0.4)",
                "0 0 30px rgba(255,0,0,1), 0 0 60px rgba(255,0,0,0.8), 0 0 80px rgba(255,0,0,0.6)",
                "0 0 20px rgba(255,0,0,0.8), 0 0 40px rgba(255,0,0,0.6), 0 0 60px rgba(255,0,0,0.4)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            4 ПИЗДОГЕЯ
          </motion.h1>
          <p className="text-red-500 text-lg md:text-2xl lg:text-3xl mt-8 font-bold uppercase tracking-wide text-center opacity-70">
            Выбери анкету пидорка
          </p>
          <div className="text-red-500 text-4xl md:text-5xl mt-2 animate-bounce opacity-70">
            ↓
          </div>
        </section>

        {/* Team Section */}
        <section className="overflow-hidden mb-12">
          <div
            className="flex gap-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              animation: 'scroll 30s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
              width: 'fit-content'
            }}
          >
            {duplicatedMembers.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[400px] lg:w-[450px] cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(member);
                }}
              >
                <div className="relative overflow-hidden rounded-2xl h-[450px] md:h-[550px] border-4 border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,0,0,0.9)] hover:border-red-500 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 py-6 px-6 pointer-events-none">
                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wider drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]" style={{ textShadow: "0 0 20px rgba(255,0,0,0.9), 0 2px 4px rgba(0,0,0,0.9)" }}>
                      {member.name}
                    </h3>
                    <p className="text-red-500 text-sm md:text-base font-semibold uppercase tracking-wide mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-8 pt-6 text-center px-4">
          <p className="text-gray-600 text-xs md:text-sm tracking-wider">
            © 2026 ЧЕТЫРЕ ПИДОРАСА ПРОДАКШН.
          </p>
        </footer>
      </div>

      {/* Modal */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-320px * 4 - 32px * 4));
          }
        }
        
        @media (min-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-400px * 4 - 32px * 4));
            }
          }
        }
        
        @media (min-width: 1024px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-450px * 4 - 32px * 4));
            }
          }
        }
      `}</style>
    </div>
  );
}