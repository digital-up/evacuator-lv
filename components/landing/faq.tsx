"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Какие марки автомобилей вы обслуживаете?",
    answer: "Мы работаем со всеми марками автомобилей, включая премиальные бренды: Mercedes-Benz, BMW, Audi, Porsche, Lexus, Land Rover и другие. Наши мастера имеют опыт работы с европейскими, японскими и американскими автомобилями.",
  },
  {
    question: "Сколько времени занимает детейлинг?",
    answer: "Время зависит от выбранного пакета услуг. Базовая полировка — 1-2 дня. Нанесение керамики — 2-3 дня. Комплексный детейлинг с PPF — от 3 до 5 дней. Точные сроки обсудим после осмотра вашего автомобиля.",
  },
  {
    question: "Даёте ли вы гарантию на работы?",
    answer: "Да, мы предоставляем гарантию на все виды работ. На керамическое покрытие — до 5 лет. На защитную плёнку — до 10 лет. На кузовной ремонт и покраску — 2 года. Гарантийный сертификат выдаётся после завершения работ.",
  },
  {
    question: "Можно ли оставить машину на ночь?",
    answer: "Конечно! У нас есть охраняемая крытая стоянка с видеонаблюдением. Автомобиль находится под полной защитой 24/7. Многие клиенты оставляют машины на несколько дней для комплексных работ.",
  },
  {
    question: "Работаете ли вы с корпоративными клиентами?",
    answer: "Да, мы предлагаем специальные условия для корпоративных клиентов: скидки на обслуживание автопарков, выделенный менеджер, гибкий график работы и возможность безналичной оплаты.",
  },
  {
    question: "Какие способы оплаты вы принимаете?",
    answer: "Принимаем наличные, карты, переводы по реквизитам. Для постоянных клиентов доступна рассрочка на крупные работы. Также работаем с лизинговыми компаниями.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-medium">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-balance">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Ответы на популярные вопросы наших клиентов
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass-card rounded-2xl p-6 text-left transition-all duration-300 hover:bg-primary/5"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
