"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Заявка",
    description: "Оставьте заявку на сайте или позвоните нам. Менеджер свяжется с вами в течение 15 минут.",
  },
  {
    number: "02",
    title: "Консультация",
    description: "Обсудим ваши пожелания, осмотрим автомобиль и составим план работ с точной стоимостью.",
  },
  {
    number: "03",
    title: "Выполнение",
    description: "Выполняем работы в согласованные сроки. Присылаем фото и видеоотчёт на каждом этапе.",
  },
  {
    number: "04",
    title: "Приёмка",
    description: "Вместе проверяем результат. Вы получаете гарантийный сертификат и рекомендации по уходу.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-medium">Процесс</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-balance">
            Как мы <span className="gradient-text">работаем</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Прозрачный процесс от первого звонка до готового результата
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center lg:text-left"
              >
                {/* Number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center relative z-10">
                    <span className="text-3xl font-bold gradient-text">{step.number}</span>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/10 blur-xl" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
