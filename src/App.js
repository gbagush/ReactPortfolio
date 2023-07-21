import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    document.title = 'Galih Bagus';
    AOS.init();

    const splashTimeout = setTimeout(() => {
      setShowApp(true);
    }, 3000);

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-black">
      {showApp ? (
        <>
          <Navbar />
          <Hiro />
        </>
      ) : (
        <SplashScreen />
      )}
    </div>
  );
}

export default App;
