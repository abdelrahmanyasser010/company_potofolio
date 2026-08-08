"use client";
import { Mail, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data/initialData";

export function FloatingActions() {
  return <div className="fixed bottom-5 end-5 z-40 flex flex-col gap-2">
    {COMPANY_INFO.whatsapp && <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp Codely" className="floating-action floating-whatsapp"><MessageCircle className="h-5 w-5" /></a>}
    <a href={`mailto:${COMPANY_INFO.email}`} aria-label="Email Codely" className="floating-action"><Mail className="h-5 w-5" /></a>
  </div>;
}
