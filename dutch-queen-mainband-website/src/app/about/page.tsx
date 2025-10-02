"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useBandContent } from "@/hooks/useConfig";

export default function AboutPage() {
  const content = useBandContent();
  const paragraphs = content.description.long.split("\n\n");

  return (
    <div className="min-h-screen bg-black pt-16">
      <section className="relative py-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/about-bg-1920.jpg"
            alt="About background"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-8 text-4xl font-thin uppercase tracking-widest text-white/80 md:text-6xl">
              About
            </h1>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-xl font-medium leading-relaxed text-white"
                    : "text-lg font-normal leading-relaxed text-white"
                }
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
