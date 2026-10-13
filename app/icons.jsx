import React from "react";

const shapes = {
  Menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  X: <><path d="m18 6-12 12M6 6l12 12" /></>,
  Phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3.2a2 2 0 0 1-.6 1.7L7.1 10.5a16 16 0 0 0 6.4 6.4l1.9-1.9a2 2 0 0 1 1.7-.6l3.2.5a2 2 0 0 1 1.7 2Z" /></>,
  Mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  Play: <><path d="m8 5 12 7-12 7z" fill="currentColor" stroke="none"/></>,
  CheckCircle2: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
  ArrowRight: <><path d="M5 12h14m-7-7 7 7-7 7"/></>,
  ArrowLeft: <><path d="M19 12H5m7 7-7-7 7-7"/></>,
  ChevronLeft: <><path d="m15 18-6-6 6-6"/></>,
  ChevronRight: <><path d="m9 18 6-6-6-6"/></>,
  Sparkles: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z"/><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z"/></>,
  ShieldCheck: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  Database: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></>,
  Award: <><circle cx="12" cy="8" r="6"/><path d="m8.2 13-1.2 9 5-3 5 3-1.2-9"/></>,
  Languages: <><path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1m8 12 3 8m-8 0 5-13 5 13m-8-5h6"/></>,
  Star: <><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/></>,
  ImageIcon: <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></>,
  User: <><circle cx="12" cy="8" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></>,
};

function makeIcon(name) {
  function Icon({ size = 24, className, ...props }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>{shapes[name]}</svg>;
  }
  Icon.displayName = name;
  return Icon;
}

export const Menu = makeIcon("Menu");
export const X = makeIcon("X");
export const Phone = makeIcon("Phone");
export const Mail = makeIcon("Mail");
export const Play = makeIcon("Play");
export const CheckCircle2 = makeIcon("CheckCircle2");
export const ArrowRight = makeIcon("ArrowRight");
export const ArrowLeft = makeIcon("ArrowLeft");
export const ChevronLeft = makeIcon("ChevronLeft");
export const ChevronRight = makeIcon("ChevronRight");
export const Sparkles = makeIcon("Sparkles");
export const ShieldCheck = makeIcon("ShieldCheck");
export const Database = makeIcon("Database");
export const Award = makeIcon("Award");
export const Languages = makeIcon("Languages");
export const Star = makeIcon("Star");
export const ImageIcon = makeIcon("ImageIcon");
export const User = makeIcon("User");
