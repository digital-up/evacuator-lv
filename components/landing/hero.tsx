"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Москва</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Работаем с 8:00 до 22:00</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-sm font-medium text-primary">12+ лет опыта</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Премиальный уход</span>
            <br />
            <span className="gradient-text">за вашим автомобилем</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Детейлинг, ремонт и обслуживание по европейским стандартам. 
            Доверьте свой автомобиль профессионалам с гарантией результата.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full glow glow-hover transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Записаться на сервис
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Рассчитать стоимость
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { value: "15 000+", label: "Обслуженных авто" },
              { value: "98%", label: "Довольных клиентов" },
              { value: "24ч", label: "Гарантия сроков" },
              { value: "2 года", label: "Гарантия на работы" },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-4 rounded-2xl">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
        >
          <span className="text-xs uppercase tracking-wider">Узнать больше</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
