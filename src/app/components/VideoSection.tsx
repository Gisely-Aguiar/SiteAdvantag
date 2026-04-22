import { Play } from "lucide-react";
import { useState } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            A Advantag em Movimento
          </h2>
          <p className="text-lg text-gray-600">
            Conheça nossa fábrica, processos e equipe
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            {/* Placeholder image */}
            <img
              src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?w=1200"
              alt="Advantag em movimento"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition transform hover:scale-110 group"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </button>
              )}
            </div>

            {/* If playing, show iframe */}
            {isPlaying && (
              <div className="absolute inset-0">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/BU2pinrgAD0?autoplay=1"
                  title="Advantag Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
