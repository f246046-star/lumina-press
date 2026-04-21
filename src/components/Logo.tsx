import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-twelve-lords.png";

export const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group" aria-label="Twelve Lords home">
    <div className="relative h-20 w-20 md:h-28 md:w-28 flex items-center justify-center">
      <span className="absolute inset-0 rounded-full border border-dashed border-accent/50 animate-spin-slow" />
      <span className="absolute inset-1 rounded-full border border-accent/20" />
      <img
        src={logoImg}
        alt="Twelve Lords"
        className="relative h-[72px] w-[72px] md:h-[104px] md:w-[104px] object-contain animate-spin-slow"
      />
    </div>
    <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight">
      Twelve <span className="text-accent">Lords</span>
    </span>
  </Link>
);
