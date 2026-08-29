"use client";

import { Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/data/initialData";

export function FloatingActions() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed bottom-6 end-6 z-40 flex flex-col gap-3"
    >
      {COMPANY_INFO.whatsapp && (
        <div className="relative group">
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none" />
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Codely"
            className="floating-action floating-whatsapp relative flex shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(37,211,102,0.45)]"
          >
            <MessageCircle className="h-5 w-5" />
          </motion.a>
        </div>
      )}

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href={`mailto:${COMPANY_INFO.email}`}
        aria-label="Email Codely"
        className="floating-action shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
      >
        <Mail className="h-5 w-5" />
      </motion.a>
    </motion.div>
  );
}
