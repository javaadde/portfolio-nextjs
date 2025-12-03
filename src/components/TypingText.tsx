import { useState, useEffect } from 'react';

export default function TypingAnimation() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'CRAFTING\nDIGITAL\nEXPERIENCES\nTHAT MATTERS';
  const typingSpeed = 90; // milliseconds per character

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="text-center">
        <pre className="text-base md:text-md leading-tight whitespace-pre-wrap">
          {displayedText}
          <span className="">|</span>
        </pre>
      </div>
    </div>
  );
}