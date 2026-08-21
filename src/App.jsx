import { useState, useRef, useEffect } from 'react';

// UI
import Envelope from './components/ui/Envelope';
import AudioPlayer from './components/ui/AudioPlayer';

// Secciones
import Hero from './components/sections/Hero';
import Countdown from './components/sections/Countdown';
import Details from './components/sections/Details';
import DressCode from './components/sections/DressCode';
import Itinerary from './components/sections/Itinerary';
import RSVP from './components/sections/RSVP';
import Blessing from './components/sections/Blessing';
import ImageSeparator from './components/sections/ImageSeparator';
import FamilyPasses from './components/sections/FamilyPasses';
import HorizontalSeparator from './components/sections/HorizontalSeparator';
import ParallaxWaveSeparator from './components/sections/ParallaxWaveSeparator';
import Details2 from './components/sections/Details2';
import FinalPhoto from './components/sections/FinalPhoto';

export default function App() {
  const [isOpen, setIsOpen] = useState(false); 
  const [isPlaying, setIsPlaying] = useState(false); 
  
  const audioRef = useRef(null);

  // Bloquear el scroll de la pantalla mientras el sobre esté cerrado
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Autoplay bloqueado", e));
      setIsPlaying(true);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-wedding-bg text-wedding-text font-sans">
      <audio ref={audioRef} src="/public/music/Donde Dios Nos Unió.mp3" loop preload="auto" />

      {/* Sobre flotante */}
      <Envelope onOpen={handleOpen} />

      {/* Reproductor de música */}
      {isOpen && <AudioPlayer isPlaying={isPlaying} onToggle={toggleAudio} />}

      <main className="max-w-xl mx-auto shadow-2xl bg-white pb-20">
        {/* PASAMOS LA PROP isOpen AL HERO */}
        <Hero isOpen={isOpen} />
        <Blessing />
        <FamilyPasses/>
        <Countdown />
        <ImageSeparator />
        <Details />
        <HorizontalSeparator/>
        <DressCode />
        <Itinerary />
        <ParallaxWaveSeparator/>
        <Details2/>
        <RSVP />
        <FinalPhoto />
      </main>
    </div>
  );
}