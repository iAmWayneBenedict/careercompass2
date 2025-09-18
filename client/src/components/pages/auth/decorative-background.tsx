import { authSideImg } from "@/assets/images";
import { motion } from "motion/react";

export default function DecorativeBackground() {
  return (
    <div className="relative hidden w-1/2 overflow-hidden lg:block">
      {/* Background with pattern */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url('${authSideImg}')`,
        }}
      />

      {/* Overlay  */}
      <div className="absolute inset-0 z-10 bg-black/45 dark:bg-white/90" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-12 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-center"
        >
          <h2 className="mb-6 text-4xl font-bold">
            Ghost jobs? Nah, we track ’em all.
          </h2>
          <p className="text-lg opacity-90">
            One place for apps, gigs, and those “we’ll get back to you” moments.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
