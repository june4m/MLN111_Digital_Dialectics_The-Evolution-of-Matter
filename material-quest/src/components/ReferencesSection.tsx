import { motion } from 'framer-motion';
import { BookOpen, Globe, Library, ExternalLink } from 'lucide-react';
import { references } from '../data/materialQuestData';
import SectionHeader from './ui/SectionHeader';
import Container from './ui/Container';
import StaggerContainer from './ui/StaggerContainer';
import StaggerItem from './ui/StaggerItem';

const iconMap: Record<string, React.ReactNode> = {
  'giao-trinh-2021': <Library className="w-6 h-6" />,
  'giao-trinh-2010': <BookOpen className="w-6 h-6" />,
  'marxists-org':    <Globe className="w-6 h-6" />,
};

export default function ReferencesSection() {
  return (
    <section id="references" className="py-24">
      <Container size="lg">
        <SectionHeader
          eyebrow="Tài liệu tham khảo"
          title="Nguồn học thuật"
          subtitle="Các tài liệu chính thống được sử dụng trong việc xây dựng nội dung của Material Quest"
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {references.map((ref) => (
            <StaggerItem key={ref.id}>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center text-amber-400 shrink-0">
                    {iconMap[ref.id]}
                  </div>
                  <div>
                    <h3 className="text-slate-800 dark:text-slate-100 font-bold leading-tight text-base">{ref.title}</h3>
                    {ref.year && <span className="text-amber-600 text-sm font-semibold">{ref.year}</span>}
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">{ref.description}</p>

                {ref.url && (
                  <a href={ref.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-700 text-sm font-medium hover:text-blue-900 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Truy cập tài liệu
                  </a>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* About section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="mt-16 bg-blue-950 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block mb-3 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 border border-amber-400/30 px-3 py-1 rounded-full">
                Về Material Quest
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Nền tảng học tập triết học tương tác
              </h3>
              <p className="text-blue-200 leading-relaxed">
                Material Quest được xây dựng nhằm giúp sinh viên, giảng viên và người học triết học tiếp cận nội dung phạm trù vật chất một cách trực quan, dễ hiểu và thú vị.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Sinh viên đại học',       icon: '🎓' },
                { label: 'Giảng viên triết học',    icon: '📚' },
                { label: 'Người học triết học',     icon: '🔍' },
                { label: 'Chuẩn bị thuyết trình',  icon: '🎯' },
              ].map(item => (
                <div key={item.label} className="bg-white/10 border border-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
