import { useState } from 'react';

interface ProgramData {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  price: string;
}

interface Props {
  programs: ProgramData[];
}

const categories: { value: string; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'weight', label: 'Похудение' },
  { value: 'energy', label: 'Энергия' },
  { value: 'stress', label: 'Антистресс' },
  { value: 'immunity', label: 'Иммунитет' },
  { value: 'detox', label: 'Детокс' },
  { value: 'beauty', label: 'Красота' },
  { value: 'sleep', label: 'Сон' },
  { value: 'kids', label: 'Детям' },
  { value: 'other', label: 'Другое' },
];

const categoryColors: Record<string, string> = {
  weight: 'bg-orange-100 text-orange-700',
  energy: 'bg-yellow-100 text-yellow-700',
  stress: 'bg-purple-100 text-purple-700',
  immunity: 'bg-blue-100 text-blue-700',
  detox: 'bg-emerald-100 text-emerald-700',
  beauty: 'bg-pink-100 text-pink-700',
  sleep: 'bg-indigo-100 text-indigo-700',
  kids: 'bg-cyan-100 text-cyan-700',
  other: 'bg-stone-100 text-stone-600',
};

function getCategoryLabel(value: string): string {
  return categories.find((c) => c.value === value)?.label ?? value;
}

export default function ProgramFilter({ programs }: Props) {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? programs : programs.filter((p) => p.category === active);

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => setActive(value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === value
                ? 'text-white' + ' ' + '[background:linear-gradient(135deg,#7CB59D,#5EA882)]'
                : 'border border-[#2E4A3A]/20 text-[#555555] hover:border-[#2E4A3A] hover:text-[#2E4A3A]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((program) => (
          <div
            key={program.id}
            className="flex flex-col rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-[Montserrat] text-lg font-semibold text-[#2E4A3A]">
                {program.title}
              </h3>
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${categoryColors[program.category] ?? categoryColors.other}`}
              >
                {getCategoryLabel(program.category)}
              </span>
            </div>

            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#888888]">
              {program.description}
            </p>

            <div className="mt-4 flex items-center gap-4 text-sm text-[#888888]">
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {program.duration}
              </span>
              <span className="font-semibold text-[#2E4A3A]">{program.price}</span>
            </div>

            <a
              href={`/programs/${program.id}`}
              className="mt-5 block rounded-full border-2 border-[#2E4A3A]/20 py-2.5 text-center text-sm font-semibold text-[#2E4A3A] transition-colors hover:bg-[#2E4A3A] hover:text-white"
            >
              Подробнее
            </a>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-[#888888]">
          В этой категории пока нет программ
        </p>
      )}
    </div>
  );
}
