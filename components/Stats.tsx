const stats = [
  { value: "24/7", label: "Dostupnost" },
  { value: "15+", label: "Godina iskustva" },
  { value: "30 min", label: "Prosečno vreme dolaska" },
  { value: "100%", label: "Zadovoljnih klijenata" },
];

export default function Stats() {
  return (
    <section className="bg-amber-500 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-extrabold text-gray-900">{s.value}</div>
            <div className="text-gray-800 font-semibold mt-1 text-sm uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
