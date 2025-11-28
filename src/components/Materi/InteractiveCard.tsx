interface InteractiveCardProps {
  title: string;
  icon: string;
  description: string;
  color?: string;
}

export default function InteractiveCard({ title, icon, description, color = "red" }: InteractiveCardProps) {
  const colorClasses = {
    red: "from-red-600 to-red-800 border-red-500/30 text-red-500",
    blue: "from-blue-600 to-blue-800 border-blue-500/30 text-blue-500",
    gold: "from-yellow-600 to-yellow-800 border-yellow-500/30 text-yellow-500",
  }[color] || "from-gray-600 to-gray-800 border-gray-500/30 text-gray-500";

  return (
    <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:-translate-y-2 transition-all duration-300">
      {/* Glow Effect */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${colorClasses.split(' ')[0]} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
      
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-white/5 border ${colorClasses.split(' ')[2]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            <i className={`fas ${icon} text-2xl ${colorClasses.split(' ')[3]}`}></i>
        </div>
        
        <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            {description}
        </p>
      </div>
    </div>
  );
}
