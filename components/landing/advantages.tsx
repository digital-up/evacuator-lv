"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Wrench, Users, Sparkles } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Гарантия 2 года",
    description: "На все виды работ предоставляем официальную гарантию. Уверены в качестве на 100%.",
  },
  {
    icon: Clock,
    title: "Точно в срок",
    description: "Соблюдаем оговоренные сроки. Если опаздываем — предоставляем скидку 10%.",
  },
  {
    icon: Award,
    title: "Сертифицированные мастера",
    description: "Команда из 15 специалистов с опытом работы от 5 лет и международными сертификатами.",
  },
  {
    icon: Wrench,
    title: "Премиальное оборудование",
    description: "Используем только профессиональное оборудование Koch Chemie, Rupes, Festool.",
  },
  {
    icon: Users,
    title: "Индивидуальный подход",
    description: "Персональный менеджер для каждого клиента. Фото и видеоотчёт о каждом этапе работ.",
  },
  {
    icon: Sparkles,
    title: "Премиум материалы",
    description: "Работаем только с материалами уровня Ceramic Pro, Gyeon, Nanolex, SunTek.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function Advantages() {
  return (
    <section id="advantages" className="py-24 relative">
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
          <span className="text-primary text-sm uppercase tracking-wider font-medium">Почему мы</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-balance">
            Почему клиенты <span className="gradient-text">выбирают нас</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Мы не просто ремонтируем автомобили — мы создаём премиальный опыт обслуживания
          </p>
        </motion.div>

        {/* Advantages grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-3xl group hover:bg-primary/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
