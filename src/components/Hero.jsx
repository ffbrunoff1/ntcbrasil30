import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="gradient-text">Construindo o futuro</span>
              <br />
              com confiança e qualidade
            </h1>

            <p className="text-xl text-gray-600">
              Transformamos suas ideias em realidade com excelência e
              compromisso. Desenvolvendo projetos sólidos para um amanhã melhor.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale Conosco
                <ArrowRight className="ml-2" size={20} />
              </motion.a>

              <motion.a
                href="#services"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nossos Serviços
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-primary/10 rounded-2xl p-8">
              <Building2 className="w-24 h-24 text-primary mb-6" />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  Expertise em Construção
                </h3>
                <p className="text-gray-600">
                  Nossa experiência e dedicação nos permitem entregar projetos
                  excepcionais que superam as expectativas dos nossos clientes.
                </p>
              </div>
            </div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-6 -z-10"
              animate={{ rotate: 6 }}
              transition={{
                repeat: Infinity,
                duration: 10,
                repeatType: 'reverse',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
