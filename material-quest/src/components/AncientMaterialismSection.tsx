import { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { fiveElements, philosopherCards } from "../data/materialQuestData";
import SectionHeader from "./ui/SectionHeader";
import Container from "./ui/Container";

// ─── Five Elements ────────────────────────────────────────────────────────────

const elementStyles: Record<
  string,
  { bg: string; border: string; glow: string; charColor: string }
> = {
  kim: {
    bg: "bg-yellow-50",
    border: "border-yellow-300",
    glow: "shadow-yellow-200",
    charColor: "text-yellow-600",
  },
  moc: {
    bg: "bg-green-50",
    border: "border-green-300",
    glow: "shadow-green-200",
    charColor: "text-green-600",
  },
  thuy: {
    bg: "bg-blue-50",
    border: "border-blue-300",
    glow: "shadow-blue-200",
    charColor: "text-blue-600",
  },
  hoa: {
    bg: "bg-red-50",
    border: "border-red-300",
    glow: "shadow-red-200",
    charColor: "text-red-600",
  },
  tho: {
    bg: "bg-amber-50",
    border: "border-amber-300",
    glow: "shadow-amber-200",
    charColor: "text-amber-600",
  },
};

function FiveElementsSubSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = fiveElements.find((e) => e.id === selectedId);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {fiveElements.map((el, i) => {
          const s = elementStyles[el.id];
          const isSelected = selectedId === el.id;
          return (
            <motion.button
              key={el.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedId(isSelected ? null : el.id)}
              aria-pressed={isSelected}
              className={`flex flex-col items-center gap-2 w-28 py-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                ${isSelected ? `${s.bg} ${s.border} shadow-lg ${s.glow}` : "bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-slate-300 hover:shadow-md"}`}
            >
              <span className={`text-4xl font-bold ${s.charColor}`}>
                {el.character}
              </span>
              <span className="text-sm font-bold text-slate-700">
                {el.name}
              </span>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${isSelected ? "rotate-180 text-slate-500" : "text-slate-300"}`}
              />
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative rounded-2xl border-2 p-6 ${elementStyles[selected.id].bg} ${elementStyles[selected.id].border}`}
          >
            <button
              onClick={() => setSelectedId(null)}
              aria-label="Đóng"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:bg-white/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <span
                className={`text-5xl font-bold ${elementStyles[selected.id].charColor}`}
              >
                {selected.character}
              </span>
              <div>
                <h4 className="text-xl font-bold text-slate-800">
                  {selected.name}
                </h4>
                <p className="text-sm text-slate-500">
                  Ngũ hành · Triết học Trung Hoa
                </p>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {selected.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Water & Fire ─────────────────────────────────────────────────────────────

function WaterFireSubSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const waterControls = useAnimation();
  const fireControls = useAnimation();
  const selected = philosopherCards.find((p) => p.id === selectedId);

  async function handleWaterClick() {
    const next = selectedId === "thales" ? null : "thales";
    setSelectedId(next);
    if (next === "thales") {
      await waterControls.start({
        y: [0, -12, 0, -8, 0],
        transition: { duration: 1.0, ease: "easeInOut" },
      });
    }
  }

  async function handleFireClick() {
    const next = selectedId === "heraclitus" ? null : "heraclitus";
    setSelectedId(next);
    if (next === "heraclitus") {
      await fireControls.start({
        scale: [1, 1.12, 0.96, 1.08, 1],
        opacity: [1, 0.75, 1, 0.8, 1],
        transition: { duration: 0.9, ease: "easeInOut" },
      });
    }
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-5 mb-6">
        <motion.button
          onClick={handleWaterClick}
          aria-pressed={selectedId === "thales"}
          animate={waterControls}
          whileHover={{ scale: 1.02, y: -3 }}
          whileTap={{ scale: 0.98 }}
          className={`relative rounded-2xl border-2 p-6 text-left cursor-pointer transition-all duration-300
            ${selectedId === "thales" ? "bg-blue-50 border-blue-400 shadow-lg shadow-blue-100" : "bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-blue-300 hover:shadow-md"}`}
        >
          <div className="text-5xl mb-4">💧</div>
          <h4 className="text-lg font-bold text-blue-800 mb-1">Nước</h4>
          <p className="text-sm text-slate-500 font-medium">
            Thalès · 624–546 TCN
          </p>
          <p className="text-xs text-slate-400 mt-2">Nhấn để xem giải thích</p>
        </motion.button>

        <motion.button
          onClick={handleFireClick}
          aria-pressed={selectedId === "heraclitus"}
          animate={fireControls}
          whileHover={{ scale: 1.02, y: -3 }}
          whileTap={{ scale: 0.98 }}
          className={`relative rounded-2xl border-2 p-6 text-left cursor-pointer transition-all duration-300
            ${selectedId === "heraclitus" ? "bg-orange-50 border-orange-400 shadow-lg shadow-orange-100" : "bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:border-orange-300 hover:shadow-md"}`}
        >
          <div className="text-5xl mb-4">🔥</div>
          <h4 className="text-lg font-bold text-orange-800 mb-1">Lửa</h4>
          <p className="text-sm text-slate-500 font-medium">
            Heraclite · 535–475 TCN
          </p>
          <p className="text-xs text-slate-400 mt-2">Nhấn để xem giải thích</p>
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative rounded-2xl border-2 p-6 ${selected.id === "thales" ? "bg-blue-50 border-blue-200" : "bg-orange-50 border-orange-200"}`}
          >
            <button
              onClick={() => setSelectedId(null)}
              aria-label="Đóng"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:bg-white/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <h4
              className={`text-lg font-bold mb-3 ${selected.id === "thales" ? "text-blue-800" : "text-orange-800"}`}
            >
              {selected.name}
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm">
              {selected.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Atom Simulation ──────────────────────────────────────────────────────────

const DEMOCRITUS =
  "Démocrite (khoảng 460–370 TCN) đề xuất thuyết Nguyên tử (Atomos — không thể phân chia): vũ trụ được cấu thành từ những hạt vật chất cực nhỏ, vĩnh cửu, không thể phân chia, vận động trong khoảng không. Các nguyên tử có hình dạng khác nhau (tròn, vuông, tam giác...) và sự kết hợp của chúng tạo ra mọi vật thể.";

function AtomSimulationSubSection() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  function click(shape: string) {
    setActive(shape);
    setShow(true);
  }

  const spin = (duration: number, dir: 1 | -1 = 1) => ({
    animate: { rotate: 360 * dir },
    transition: { duration, repeat: Infinity, ease: "linear" as const },
  });

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div
          className="relative flex items-center justify-center"
          style={{ width: 220, height: 220 }}
        >
          {/* Nucleus */}
          <div className="absolute z-10 w-14 h-14 rounded-full bg-blue-900 border-4 border-blue-400 shadow-xl shadow-blue-900/40 flex items-center justify-center">
            <span className="text-white font-bold text-base">+</span>
          </div>

          {/* Orbit 1 — vòng ngoài, hạt tròn amber */}
          <div
            className="absolute rounded-full border-2 border-blue-300/60"
            style={{ width: 200, height: 200 }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ width: 200, height: 200 }}
            animate={spin(4).animate}
            transition={spin(4).transition}
          >
            <motion.button
              onClick={() => click("circle")}
              aria-label="Hạt tròn"
              whileHover={{ scale: 1.6 }}
              whileTap={{ scale: 0.85 }}
              animate={spin(4, -1).animate}
              transition={spin(4, -1).transition}
              style={{
                position: "absolute",
                top: "-10px",
                left: "50%",
                x: "-50%",
              }}
              className="w-5 h-5 rounded-full bg-amber-400 border-2 border-amber-300 shadow-md shadow-amber-400/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            />
          </motion.div>

          {/* Orbit 2 — vòng giữa nghiêng 60°, hạt vuông emerald */}
          <div
            className="absolute rounded-full border-2 border-emerald-300/60"
            style={{ width: 145, height: 145, transform: "rotate(60deg)" }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ width: 145, height: 145 }}
            animate={{ rotate: [60, 60 + 360] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          >
            <motion.button
              onClick={() => click("square")}
              aria-label="Hạt vuông"
              whileHover={{ scale: 1.6 }}
              whileTap={{ scale: 0.85 }}
              animate={{ rotate: [-60, -(60 + 360)] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                top: "-8px",
                left: "50%",
                x: "-50%",
              }}
              className="w-4 h-4 rounded-sm bg-emerald-400 border-2 border-emerald-300 shadow-md shadow-emerald-400/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            />
          </motion.div>

          {/* Orbit 3 — vòng trong nghiêng -60°, hạt tam giác pink */}
          <div
            className="absolute rounded-full border-2 border-pink-300/60"
            style={{ width: 95, height: 95, transform: "rotate(-60deg)" }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ width: 95, height: 95 }}
            animate={{ rotate: [-60, -60 - 360] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          >
            <motion.button
              onClick={() => click("triangle")}
              aria-label="Hạt tam giác"
              whileHover={{ scale: 1.6 }}
              whileTap={{ scale: 0.85 }}
              animate={{ rotate: [60, 60 + 360] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                top: "-10px",
                left: "50%",
                x: "-50%",
                background: "transparent",
                padding: 0,
                cursor: "pointer",
              }}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
            >
              <span
                style={{
                  display: "block",
                  width: 0,
                  height: 0,
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderBottom: "14px solid #f472b6",
                  filter: "drop-shadow(0 2px 4px rgba(244,114,182,0.5))",
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-400 mb-4">
        Nhấn vào một hạt để xem giải thích của Démocrite
      </p>

      <AnimatePresence>
        {show && (
          <motion.div
            key="demo"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-violet-50 border-2 border-violet-200 rounded-2xl p-6"
          >
            <button
              onClick={() => {
                setShow(false);
                setActive(null);
              }}
              aria-label="Đóng"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:bg-white/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">
                {active === "circle" ? "⚪" : active === "square" ? "🟩" : "🔺"}
              </span>
              <h4 className="font-bold text-violet-800">
                Démocrite · Thuyết Nguyên Tử
              </h4>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              {DEMOCRITUS}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const tabs = [
  { id: "nguhanh", label: "Ngũ Hành", sub: "Triết học Trung Hoa" },
  { id: "nuoclua", label: "Nước & Lửa", sub: "Triết học Hy Lạp" },
  { id: "atom", label: "Thuyết Nguyên Tử", sub: "Démocrite" },
];

export default function AncientMaterialismSection() {
  const [activeTab, setActiveTab] = useState("nguhanh");

  return (
    <section id="ancient" className="py-24">
      <Container size="lg">
        <SectionHeader
          eyebrow="Chủ nghĩa duy vật cổ đại"
          title="Những nỗ lực đầu tiên giải thích Vật chất"
          subtitle="Các nền triết học cổ đại đã cố gắng giải thích thế giới từ chính thế giới vật chất, không cần đến thần linh hay lực lượng siêu nhiên"
        />

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center px-6 py-3 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                ${
                  activeTab === tab.id
                    ? "bg-blue-900 border-blue-900 text-white shadow-lg shadow-blue-900/20"
                    : "bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-800"
                }`}
            >
              <span className="font-semibold text-sm">{tab.label}</span>
              <span
                className={`text-xs mt-0.5 ${activeTab === tab.id ? "text-blue-200" : "text-slate-400"}`}
              >
                {tab.sub}
              </span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {activeTab === "nguhanh" && <FiveElementsSubSection />}
              {activeTab === "nuoclua" && <WaterFireSubSection />}
              {activeTab === "atom" && <AtomSimulationSubSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
