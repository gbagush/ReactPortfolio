import React, { useEffect, useRef } from 'react';
import 'prismjs/themes/prism-funky.css';
import Prism from 'prismjs';
import Typed from 'typed.js';

const CodeSnap = ({ code, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(codeRef.current, {
      strings: [code],
      typeSpeed: 40,
      showCursor: true,
      onComplete: () => {
        Prism.highlightElement(codeRef.current);
      }
    });

    return () => {
      typed.destroy();
    };
  }, [code]);

  return (
    <pre>
      <code className={`language-${language}`} ref={codeRef}></code>
    </pre>
  );
};

export default CodeSnap;
