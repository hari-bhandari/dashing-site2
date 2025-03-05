"use client";

import { cn } from "@/app/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useMemo, memo } from "react";

// Memoized character component to reduce re-renders
const Character = memo(({ char, className }: { char: string; className?: string }) => (
  <motion.span
    initial={{ opacity: 0, display: "none" }}
    className={cn(`dark:text-white text-black opacity-0 hidden`, className)}
  >
    {char}
  </motion.span>
));
Character.displayName = "Character";

// Memoized word component
const Word = memo(({ word, idx }: { word: { text: string[]; className?: string }; idx: number }) => (
  <div key={`word-${idx}`} className="inline-block">
    {word.text.map((char, index) => (
      <Character key={`char-${index}`} char={char} className={word.className} />
    ))}
    &nbsp;
  </div>
));
Word.displayName = "Word";

// Keep this as a named export for backward compatibility
export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Process words only when they change
  const wordsArray = useMemo(() => {
    return words.map((word) => ({
      ...word,
      text: word.text.split(""),
    }));
  }, [words]);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <Word key={`word-${idx}`} word={word} idx={idx} />
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-6 md:h-6 lg:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

// Memoized span for smooth effect
const SmoothCharacter = memo(({ char, className }: { char: string; className?: string }) => (
  <span className={cn(`dark:text-white text-black`, className)}>
    {char}
  </span>
));
SmoothCharacter.displayName = "SmoothCharacter";

const TypewriterEffectSmooth = memo(({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Process words only when they change
  const wordsArray = useMemo(() => {
    return words.map((word) => ({
      ...word,
      text: word.text.split(""),
    }));
  }, [words]);
  
  return (
    <div className={cn("flex items-center", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold flex items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          {wordsArray.map((word, idx) => (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <SmoothCharacter 
                  key={`char-${index}`} 
                  char={char} 
                  className={word.className} 
                />
              ))}
              &nbsp;
            </div>
          ))}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-6 sm:h-7 md:h-8 lg:h-10 xl:h-12 bg-blue-500 self-center",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
});
TypewriterEffectSmooth.displayName = "TypewriterEffectSmooth";

export default TypewriterEffectSmooth;
