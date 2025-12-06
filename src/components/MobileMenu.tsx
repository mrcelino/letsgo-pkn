import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onEnterMapMode: () => void;
}

export default function MobileMenu({ isOpen, onClose, onEnterMapMode }: MobileMenuProps) {
  return (
    <div className={`fixed inset-0 z-[100] md:hidden bg-black transition-all duration-500 flex flex-col justify-center items-center gap-8 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Close Button */}
        <button 
            onClick={onClose} 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
        >
            <i className="fas fa-times text-xl"></i>
        </button>

        {/* Menu Items */}
        <div className="relative z-50 w-full flex flex-col items-center gap-8">
            <Link href="/" onClick={onClose} style={{ color: '#ffffff', opacity: 1 }} className="relative z-50 text-3xl font-heading font-bold hover:text-red-500 transition-colors">Beranda</Link>
            <button onClick={() => { onEnterMapMode(); onClose(); }} style={{ color: '#ef4444', opacity: 1 }} className="relative z-50 text-3xl font-heading font-bold hover:text-red-400 transition-colors flex items-center gap-3">
                <i className="fas fa-map-marked-alt"></i> Peta Budaya
            </button>
            <Link href="/materi" onClick={onClose} style={{ color: '#ffffff', opacity: 1 }} className="relative z-50 text-3xl font-heading font-bold hover:text-red-500 transition-colors">Materi</Link>
            <Link href="/quiz" onClick={onClose} style={{ color: '#ffffff', opacity: 1 }} className="relative z-50 text-3xl font-heading font-bold hover:text-red-500 transition-colors">Kuis</Link>
            <Link href="/about" onClick={onClose} style={{ color: '#ffffff', opacity: 1 }} className="relative z-50 text-3xl font-heading font-bold hover:text-red-500 transition-colors">Credit</Link>
        </div>
    </div>
  );
}
