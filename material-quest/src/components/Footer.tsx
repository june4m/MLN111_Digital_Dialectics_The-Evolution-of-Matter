import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg">Material Quest</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Nền tảng học tập tương tác về lịch sử phát triển phạm trù vật chất trong triết học Mác-Lênin.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Nội dung</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Lịch sử phát triển</li>
              <li>Chủ nghĩa duy vật cổ đại</li>
              <li>Cuộc cách mạng khoa học</li>
              <li>Định nghĩa của V.I. Lênin</li>
              <li>Quiz kiểm tra</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Dành cho</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Sinh viên đại học</li>
              <li>Giảng viên triết học</li>
              <li>Người học triết học</li>
              <li>Người chuẩn bị thuyết trình</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© 2025 Material Quest. Tài liệu học thuật.</p>
          <p className="text-xs text-slate-500">Dựa trên Giáo trình Triết học Mác-Lênin, Bộ GD&ĐT 2021</p>
        </div>
      </div>
    </footer>
  );
}
