import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function SanValentinPage() {
  const [openLetter, setOpenLetter] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 flex flex-col items-center justify-center p-6 text-center">
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-rose-700 mb-6"
      >
        Feliz San Valentín ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-rose-800 max-w-2xl mb-8"
      >
        Esta página es solo para ti. Porque incluso a la distancia,
        sigues siendo mi persona favorita en el mundo.
      </motion.p>

      <Card className="rounded-2xl shadow-xl bg-white/80 backdrop-blur-md max-w-xl w-full">
        <CardContent className="p-6">
          {!openLetter ? (
            <Button
              onClick={() => setOpenLetter(true)}
              className="rounded-2xl text-lg px-6 py-4"
            >
              Abrir mi carta 💌
            </Button>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <p className="text-rose-900 text-base md:text-lg">
                Desde que llegaste a mi vida, todo tiene más sentido.
                Gracias por cada llamada, cada mensaje y cada momento compartido.
                No importa la distancia, mi corazón siempre encuentra el camino hacia ti.
              </p>
              <p className="text-rose-900 text-base md:text-lg">
                Prometo que pronto celebraremos juntos,
                pero mientras tanto, quiero que sepas que te amo más cada día.
              </p>
            </motion.div>
          )}
        </CardContent>
      </Card>

      <div className="mt-10">
        {!accepted ? (
          <>
            <p className="text-xl text-rose-800 mb-4">
              ¿Quieres seguir escribiendo nuestra historia conmigo?
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => setAccepted(true)}
                className="rounded-2xl px-8 py-4 text-lg"
              >
                Sí, siempre 💖
              </Button>

              <Button
                variant="outline"
                className="rounded-2xl px-8 py-4 text-lg"
              >
                No 😢
              </Button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center gap-4"
          >
            <Heart className="w-16 h-16 text-rose-600 fill-rose-600" />
            <p className="text-2xl font-semibold text-rose-700">
              Sabía que dirías que sí 💍✨
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
