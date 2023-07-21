import React, { useEffect } from 'react';

const SplashScreen = () => {
  const greetings = [
    { greeting: 'Hello' },
    { greeting: '¡Hola!' },
    { greeting: 'Bonjour' },
    { greeting: 'こんにちは。' },
  ];

  useEffect(() => {
    const splashScreenDuration = 3000;
    const timer = setTimeout(() => {
      const splashScreen = document.getElementById('splash-screen');
      if (splashScreen) {
        splashScreen.style.display = 'none';
      }
    }, splashScreenDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="splash-screen" className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="text-white text-4xl font-bold">
        {greetings.map((greetingObj, index) => (
          <p key={index} data-aos="fade-in" data-aos-delay={index * 300}>
            {greetingObj.greeting}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
