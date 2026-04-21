import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-twelve-lords.png";

export const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group" aria-label="Twelve Lords home">
    <div className="relative h-12 w-12 flex items-center justify-center">
      <span className="absolute inset-0 rounded-full border border-dashed border-accent/50 animate-spin-slow" />
      <span className="absolute inset-1 rounded-full border border-accent/20" />
      <img
        src={logoImg}
        alt="Twelve Lords"
        className="relative h-9 w-9 object-contain animate-spin-slow"
      />
    </div>
    <span className="font-display font-extrabold text-lg tracking-tight">
      Twelve <span className="text-accent">Lords</span>
    </span>
  </Link>
);
