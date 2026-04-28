"use client";
import { PHONE } from "@/lib/constants";

interface PhoneLinkProps {
  className?: string;
  children: React.ReactNode;
}

export default function PhoneLink({ className, children }: PhoneLinkProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof (window as unknown as Record<string, unknown>).gtag_report_conversion === "function") {
      (window as unknown as { gtag_report_conversion: (url: string) => void }).gtag_report_conversion(`tel:${PHONE}`);
    }
  };

  return (
    <a href={`tel:${PHONE}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
