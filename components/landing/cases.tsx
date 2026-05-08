"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Mercedes-Benz S-Class",
    category: "Детейлинг",
    result: "Полная защита кузова керамикой Ceramic Pro",
    duration: "3 дня",
    image: "/cases/mercedes.jpg",
  },
  {
    title: "BMW M5 Competition",
    category: "PPF + Детейлинг",
    result: "Оклейка капота и бамперов защитной плёнкой",
    duration: "2 дня",
    image: "/cases/bmw.jpg",
  },
  {
    title: "Porsche 911 GT3",
    category: "Кузовной ремонт",
    result: "Восстановление после ДТП с сохранением заводского ЛКП",
    duration: "7 дней",
    image: "/cases/porsche.jpg",
  },
  {
    title: "Audi RS6 Avant",
    category: "Комплекс",
    result: "ТО + детейлинг + установка допоборудования",
    duration: "4 дня",
    image: "/cases/audi.jpg",
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-medium">Портфолио</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-balance">
            Наши <span className="gradient-text">работы</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Каждый проект — это история успеха и довольного клиента
          </p>
        </motion.div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-card rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase tracking-wider text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {caseItem.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{caseItem.duration}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {caseItem.title}
                </h3>
                <p className="text-muted-foreground">{caseItem.result}</p>
                
                {/* Arrow */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More cases link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 group">
            <span className="text-lg font-medium">Смотреть все работы</span>
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
