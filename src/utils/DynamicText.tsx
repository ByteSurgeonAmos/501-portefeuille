"use client";
import React, { useEffect, useState } from "react";

const DynamicText: React.FC = () => {
  const words = [
    "Amos Wachira.",
    " a Full Stack Developer.",
    "a Biomedical Engineer.",
    "a Blockchain Developer.",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      let updatedText = currentText;

      if (isTyping && !isDeleting) {
        updatedText = currentWord.slice(0, currentText.length + 1);
        setCurrentText(updatedText);

        if (updatedText === currentWord) {
          setIsTyping(false);
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else if (isDeleting) {
        updatedText = currentWord.slice(0, currentText.length - 1);
        setCurrentText(updatedText);

        if (updatedText === "") {
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, 100);
    return () => clearInterval(typingInterval);
  }, [currentText, isTyping, isDeleting, currentWordIndex]);

  return (
    <div className="dynamic-text sm:absolute ">
      I&apos;m <span className="text-red-500">{currentText}</span>
      <span className="cursor text-red-500">|</span>
      <br />
      <div className="mt-2">This is my portfolio.</div>
    </div>
  );
};

export default DynamicText;
