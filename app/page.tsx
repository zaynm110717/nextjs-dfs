import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function SanValentinPro() {
  const [openLetter, setOpenLetter] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [musicOn, setMusicOn] = useState(false);

  // Generador optimizado de corazones (máximo 25 en pantalla)
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => {
        const newHeart = {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 15,
          duration: Math.random() * 4 + 6,
        };
        const updated = [...prev, newHeart];
        return updated.slice(-25);
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-300 via-pink-400 to-fuchsia-500 flex flex-col items-center justify-center p-6 text-center">

      {/* 🎵 Música */}
      {musicOn && (
        <audio autoPlay loop>
          <source src="/yo-no-se-manana.mp3" type="audio/mpeg" />
        </audio>
      )}

      {!musicOn && (
        <button
          onClick={() => setMusicOn(true)}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg text-rose-600 font-semibold"
        >
          🎵 Activar música
        </button>
      )}

      {/* 💖 Corazones flotando */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: "100vh", opacity: 1 }}
            animate={{ y: "-10vh", opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: heart.duration, ease: "linear" }}
            style={{
              position: "absolute",
              left: `${heart.left}%`,
              fontSize: heart.size,
            }}
          >
            💖
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ✨ Título */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-6"
      >
        Feliz San Valentín ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-2xl text-white max-w-2xl mb-10"
      >
        No sé qué pasará mañana…
        pero hoy sé que quiero vivirlo contigo.
      </motion.p>

      {/* 💌 Carta */}
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-xl w-full p-8">
        {!openLetter ? (
          <button
            onClick={() => setOpenLetter(true)}
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-3xl text-lg transition"
          >
            Abrir mi carta 💌
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 text-rose-900 text-lg"
          >
            <p>
              Tal vez no sé qué pasará mañana…
              pero sí sé que cada día contigo es un regalo.
            </p>
            <p>
              Gracias por quedarte, por elegirme,
              por hacer que incluso la distancia se sienta pequeña.
            </p>
            <p className="font-semibold text-xl">
              Te elijo hoy… y siempre 💖
            </p>
          </motion.div>
        )}
      </div>

      {/* 💍 Propuesta */}
      <div className="mt-12">
        {!accepted ? (
          <>
            <p className="text-2xl text-white mb-6 font-semibold drop-shadow-lg">
              ¿Quieres seguir escribiendo nuestra historia conmigo?
            </p>

            <div className="flex gap-6 justify-center">
              <button
                onClick={() => setAccepted(true)}
                className="bg-white text-rose-600 px-10 py-5 rounded-3xl text-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Sí, siempre 💖
              </button>

              <motion.button
                whileHover={{ x: 40 }}
                className="border-2 border-white text-white px-10 py-5 rounded-3xl text-xl"
              >
                No 😢
              </motion.button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex flex-col items-center gap-6"
          >
            <Heart className="w-28 h-28 text-white fill-white animate-pulse" />
            <p className="text-4xl font-bold text-white drop-shadow-2xl">
              Eres el amor de mi vida 💍✨
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
