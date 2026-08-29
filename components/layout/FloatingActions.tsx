"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/data/initialData";

export function FloatingActions() {
  if (!COMPANY_INFO.whatsapp) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-6 end-6 z-40"
    >
      <div className="relative group">
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94 }}
          href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Codely"
          className="relative flex h-13 w-13 p-3.5 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_rgba(37,211,102,0.45)] transition-all duration-300 hover:bg-[#20ba59] hover:shadow-[0_16px_45px_rgba(37,211,102,0.6)]"
        >
          <MessageCircle className="h-6 w-6 fill-current text-white" />
        </motion.a>
      </div>
    </motion.div>
  );
}
