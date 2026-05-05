"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Детейлинг",
    description: "Комплексная защита и восстановление кузова вашего автомобиля",
    price: "от 25 000",
    popular: true,
    features: [
      "Полировка кузова",
      "Керамическое покрытие",
      "Защитные плёнки PPF",
      "Химчистка салона",
      "Восстановление оптики",
    ],
  },
  {
    title: "Техническое обслуживание",
    description: "Профессиональное ТО с использованием оригинальных запчастей",
    price: "от 8 000",
    popular: false,
    features: [
      "Замена масла и фильтров",
      "Диагностика систем",
      "Обслуживание тормозов",
      "Проверка подвески",
      "Компьютерная диагностика",
    ],
  },
  {
    title: "Кузовной ремонт",
    description: "Восстановление геометрии кузова и покраска любой сложности",
    price: "от 15 000",
    popular: false,
    features: [
      "Рихтовка кузова",
      "PDR технологии",
      "Локальная покраска",
      "Полная покраска",
      "Антикоррозийная обработка",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-medium">Услуги</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-balance">
            Наши <span className="gradient-text">услуги</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Полный спектр услуг для вашего автомобиля — от базового обслуживания до премиального детейлинга
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative glass-card rounded-3xl p-8 ${
                service.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full">
                    Популярно
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold gradient-text">{service.price}</span>
                <span className="text-muted-foreground ml-2">руб.</span>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full py-6 ${
                  service.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 glow"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Подробнее
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
