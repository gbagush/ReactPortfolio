import React, { useEffect, useRef } from 'react';
import 'prismjs/themes/prism-funky.css'; // Import the PrismJS styles for syntax highlighting
import Prism from 'prismjs'; // Import PrismJS library
import Typed from 'typed.js'; // Import the Typed.js library

const CodeSnap = ({ code, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const typed = new Typed(codeRef.current, {
      strings: [code],
      typeSpeed: 40,
      showCursor: true
    });

    // Cleanup Typed.js when the component unmounts
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
