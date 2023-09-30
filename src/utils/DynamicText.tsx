"use client";
import React, { useEffect, useState } from "react";

const DynamicText: React.FC = () => {
  const words = [
    "Amos Wachira.",
    " a Full Stack Developer.",
    "a Biomedical Engineer.",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    const typeWord = () => {
      const word = words[currentWordIndex];
      const textToType = isTyping
        ? word.slice(0, currentText.length + 1)
        : word.slice(0, currentText.length - 1);
      setCurrentText(textToType);

      if (isTyping && textToType === word) {
        setIsTyping(false);

        setTimeout(() => {
          setIsTyping(true);

          setTimeout(() => {
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
          }, 1000);
        }, 1000);
      }
    };

    const typingInterval = setInterval(typeWord, 100);
    return () => clearInterval(typingInterval);
  }, [currentWordIndex, currentText, isTyping]);

  return (
    <div className="dynamic-text sm:absolute ">
      I'm <span className="text-red-500"> {currentText}</span>
      <br />
      <div className=" mt-2">This is my portfolio.</div>
    </div>
  );
};

export default DynamicText;
