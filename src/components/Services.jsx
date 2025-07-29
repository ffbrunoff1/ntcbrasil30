import { motion } from 'framer-motion';
import { Building, Ruler, HardHat } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building,
      title: 'Construção Civil',
      description:
        'Execução de obras com excelência técnica e compromisso com prazos.',
    },
    {
      icon: Ruler,
      title: 'Projetos Estruturais',
      description:
        'Desenvolvimento de projetos seguindo as mais rigorosas normas técnicas.',
    },
    {
      icon: HardHat,
      title: 'Gestão de Obras',
      description:
        'Gerenciamento completo do seu projeto, do início à entrega final.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Nossos Serviços</span>
          </h2>
          <p className="text-xl text-gray-600">
            Oferecemos soluções completas em construção civil, com foco em
            qualidade e satisfação do cliente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <motion.a
                href="#contact"
                className="text-primary font-medium hover:text-accent transition-colors"
                whileHover={{ x: 5 }}
              >
                Saiba mais →
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="btn btn-primary inline-flex items-center"
          >
            Solicite um Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
