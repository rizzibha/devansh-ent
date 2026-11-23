import React from "react";
import { GoogleLogo, WhatsAppLogo, InstagramLogo, FacebookLogo } from "./BrandLogos";

// Arrow icon
function ArrowIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// Card Component - matches the CSS design in index.css
export function Card({ href, brand, title, subtitle }) {
  const logos = {
    google: <GoogleLogo className="w-5 h-5" />,
    whatsapp: <WhatsAppLogo />,
    instagram: <InstagramLogo />,
    facebook: <FacebookLogo />,
  };

  const brandClassMap = {
    google: "link-card-google",
    whatsapp: "link-card-whatsapp",
    instagram: "link-card-instagram",
    facebook: "link-card-facebook",
  };

  const Logo = logos[brand] ? logos[brand] : null;
  const brandClass = brandClassMap[brand] || "";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-card ${brandClass}`}
      aria-label={title}
      style={{ "--wave-x": "50%", "--wave-y": "50%" }}
    >
      <div className="icon-box">
        {Logo}
      </div>
      <div className="link-copy">
        <p className="link-title">{title}</p>
        <p className="link-subtitle">{subtitle}</p>
      </div>
      <div className="link-arrow">
        <ArrowIcon />
      </div>
    </a>
  );
}