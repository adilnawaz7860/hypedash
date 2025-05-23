'use client';
import { motion } from 'framer-motion';

const stats = [
  {
    title: 'Max Power',
    value: '1200+',
    unit: 'hp',
  },
  {
    title: 'EPA estimated range up to',
    value: '516',
    unit: 'mi',
  },
  {
    title: 'minutes to charge 200 miles',
    value: '12',
    unit: 'mins',
  },
  {
    title: '0–60 mph',
    value: '<2',
    unit: 'sec',
  },
];

export default function StatsSection() {
  return (
    <section className="text-white py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-xs font-normal text-gray-400 mb-2">{stat.title}</p>
            <h3 className="text-5xl font-normal">{stat.value}</h3>
            <p className="text-4xl mt-1 font-extralight">{stat.unit}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
