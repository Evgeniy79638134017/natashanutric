import { useState } from 'react';
import type { FormEvent } from 'react';

const tariffLabels: Record<string, string> = {
  intro: 'Знакомство (бесплатно)',
  detailed: 'Подробная консультация (2 000 ₽)',
  program: 'Программа здоровья (5 000 ₽)',
};

export default function ConsultationForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [tariff, setTariff] = useState('intro');
  const [concern, setConcern] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const lines = [
      `Здравствуйте! Хочу записаться на консультацию.`,
      ``,
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Тариф: ${tariffLabels[tariff]}`,
    ];

    if (concern.trim()) {
      lines.push(`Что беспокоит: ${concern.trim()}`);
    }
    if (preferredTime.trim()) {
      lines.push(`Удобное время: ${preferredTime.trim()}`);
    }

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/79001234567?text=${text}`, '_blank');
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#52B788]/20">
          <svg className="h-8 w-8 text-[#2D6A4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-[Montserrat] text-xl font-bold text-[#1B4332]">
          Спасибо!
        </h3>
        <p className="mt-2 text-[#6B6B6B]">
          Сообщение отправлено в WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full border-2 border-[#2D6A4F] px-6 py-2 text-sm font-semibold text-[#2D6A4F] transition-colors hover:bg-[#2D6A4F] hover:text-white"
        >
          Отправить ещё
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-lg md:p-8"
    >
      <h3 className="font-[Montserrat] text-2xl font-bold text-[#1B4332]">
        Записаться на консультацию
      </h3>

      {/* Name */}
      <div className="mt-6">
        <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C]">
          Имя <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Как вас зовут"
          className="mt-1 w-full rounded-xl border border-[#F0EBE3] bg-[#FDFAF6] px-4 py-3 text-sm text-[#2C2C2C] outline-none transition-colors focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]"
        />
      </div>

      {/* Phone */}
      <div className="mt-4">
        <label htmlFor="phone" className="block text-sm font-medium text-[#2C2C2C]">
          Телефон / WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (___) ___-__-__"
          className="mt-1 w-full rounded-xl border border-[#F0EBE3] bg-[#FDFAF6] px-4 py-3 text-sm text-[#2C2C2C] outline-none transition-colors focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]"
        />
      </div>

      {/* Tariff */}
      <fieldset className="mt-6">
        <legend className="block text-sm font-medium text-[#2C2C2C]">Тариф</legend>
        <div className="mt-2 flex flex-col gap-2">
          {Object.entries(tariffLabels).map(([value, label]) => (
            <label
              key={value}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${
                tariff === value
                  ? 'border-[#2D6A4F] bg-[#2D6A4F]/5'
                  : 'border-[#F0EBE3] hover:border-[#2D6A4F]/30'
              }`}
            >
              <input
                type="radio"
                name="tariff"
                value={value}
                checked={tariff === value}
                onChange={(e) => setTariff(e.target.value)}
                className="h-4 w-4 accent-[#2D6A4F]"
              />
              <span className="text-sm text-[#2C2C2C]">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Concern */}
      <div className="mt-4">
        <label htmlFor="concern" className="block text-sm font-medium text-[#2C2C2C]">
          Что беспокоит
        </label>
        <textarea
          id="concern"
          rows={3}
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
          placeholder="Кратко опишите вашу ситуацию"
          className="mt-1 w-full resize-none rounded-xl border border-[#F0EBE3] bg-[#FDFAF6] px-4 py-3 text-sm text-[#2C2C2C] outline-none transition-colors focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]"
        />
      </div>

      {/* Preferred time */}
      <div className="mt-4">
        <label htmlFor="time" className="block text-sm font-medium text-[#2C2C2C]">
          Удобное время для связи
        </label>
        <input
          id="time"
          type="text"
          value={preferredTime}
          onChange={(e) => setPreferredTime(e.target.value)}
          placeholder="Например: будни после 18:00"
          className="mt-1 w-full rounded-xl border border-[#F0EBE3] bg-[#FDFAF6] px-4 py-3 text-sm text-[#2C2C2C] outline-none transition-colors focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-[#2D6A4F] py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#1B4332]"
      >
        Отправить в WhatsApp
      </button>
    </form>
  );
}
