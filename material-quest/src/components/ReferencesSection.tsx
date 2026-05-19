import { motion } from 'framer-motion';
import { BookOpen, Globe, Library } from 'lucide-react';
import { references } from '../data/materialQuestData';

const iconMap: Record<string, React.ReactNode> = {
  'giao-trinh-2021': <Library className="w-8 h-8 text-amber-400" />,
  'giao-trinh-2010': <BookOpen className="w-8 h-8 text-amber-400" />,
  'marxists-org': <Globe className="w-8 h-8 text-amber-400" />,
};

export default function ReferencesSection() {
  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-3">Tài liệu tham khảo</h2>
          <p className="text-slate-400">Các nguồn học thuật được sử dụng trong website</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {references.map((ref, index) => (
            <motion.div
              key={ref.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-900 border border-indigo-800 rounded-xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                {iconMap[ref.id]}
                <div>
                  <h3 className="text-slate-100 font-semibold leading-tight">{ref.title}</h3>
                  {ref.year && (
                    <span className="text-amber-400 text-sm">{ref.year}</span>
                  )}
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed flex-1">{ref.description}</p>

              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 text-sm hover:text-amber-300 transition-colors underline underline-offset-2"
                >
                  {ref.url}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
