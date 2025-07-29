import { motion } from 'framer-motion';
import { Shield, Target, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description:
        'Comprometimento com os mais altos padrões de qualidade em todos os nossos projetos.',
    },
    {
      icon: Target,
      title: 'Foco no Resultado',
      description:
        'Buscamos sempre alcançar e superar as expectativas dos nossos clientes.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description:
        'Profissionais altamente qualificados e experientes no setor de construção.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Sobre a NTC Brasil</span>
          </h2>
          <p className="text-xl text-gray-600">
            Somos uma empresa comprometida com a excelência no setor de
            construção, oferecendo soluções inovadoras e sustentáveis para
            nossos clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa missão é desenvolver projetos que não apenas atendam às
            necessidades atuais, mas também contribuam para um futuro mais
            sustentável e eficiente no setor da construção.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
