"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Александр Петров",
    role: "Владелец BMW M5",
    text: "Превосходное качество детейлинга! Керамика держится уже 8 месяцев, машина как новая. Отдельное спасибо за внимание к деталям и профессионализм команды.",
    rating: 5,
  },
  {
    name: "Елена Смирнова",
    role: "Владелец Mercedes GLE",
    text: "Обслуживаю здесь свой автомобиль уже 2 года. Всегда качественно, в срок и с полным отчётом о проделанной работе. Рекомендую всем друзьям.",
    rating: 5,
  },
  {
    name: "Дмитрий Козлов",
    role: "Владелец Porsche Cayenne",
    text: "После кузовного ремонта машина выглядит идеально. Даже эксперт при продаже не нашёл следов работ. Настоящие профессионалы своего дела!",
    rating: 5,
  },
  {
    name: "Ирина Новикова",
    role: "Владелец Audi Q8",
    text: "Химчистка салона превзошла все ожидания. Убрали пятна, которые другие сервисы отказывались выводить. Теперь только к вам!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-medium">Отзывы</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-balance">
            Что говорят <span className="gradient-text">наши клиенты</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Более 15 000 довольных клиентов доверили нам свои автомобили
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">4.9</div>
            <div className="text-sm text-muted-foreground">Рейтинг на Яндекс</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">500+</div>
            <div className="text-sm text-muted-foreground">Отзывов</div>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">98%</div>
            <div className="text-sm text-muted-foreground">Рекомендуют нас</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
