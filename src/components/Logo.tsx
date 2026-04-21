import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-twelve-lords.png";

export const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group" aria-label="Twelve Lords home">
    <div className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center">
      <span className="absolute inset-0 rounded-full border border-dashed border-accent/50 animate-spin-slow" />
      <span className="absolute inset-1 rounded-full border border-accent/20" />
      <img
        src={logoImg}
        alt="Twelve Lords"
        className="relative h-14 w-14 md:h-16 md:w-16 object-contain animate-spin-slow"
      />
    </div>
    <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight">
      Twelve <span className="text-accent">Lords</span>
    </span>
  </Link>
);
