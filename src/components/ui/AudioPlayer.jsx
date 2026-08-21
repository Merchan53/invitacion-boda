import { useEffect } from 'react';
import { useLottie } from 'lottie-react';

import musicAnimation from '../../assets/lottie/music.json';

export default function AudioPlayer({ isPlaying, onToggle }) {
  // Configuración de Lottie usando el Hook oficial
  const { View, play, pause } = useLottie({
    animationData: musicAnimation,
    loop: true,
    autoplay: false,
  });

  // Control de reproducción según el prop isPlaying
  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      pause();
    }
  }, [isPlaying, play, pause]);

  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-40 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-wedding-rose/30 transition-transform hover:scale-105 w-14 h-14 flex items-center justify-center cursor-pointer"
      aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
    >
      <div className="w-10 h-10 flex items-center justify-center">
        {View}
      </div>
    </button>
  );
}