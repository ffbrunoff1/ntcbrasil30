import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar mensagem');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 44 99104-0774',
      href: 'tel:+5544991040774',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Padre Lebret 801 G05 Bloco 03',
      href: 'https://maps.google.com/?q=Padre+Lebret+801+G05+Bloco+03',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <p className="text-xl text-gray-600">
            Estamos prontos para atender suas necessidades e transformar seus
            projetos em realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {submitSuccess && (
                <p className="text-green-600 text-center">
                  Mensagem enviada com sucesso!
                </p>
              )}
              {submitError && (
                <p className="text-red-600 text-center">Erro: {submitError}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
