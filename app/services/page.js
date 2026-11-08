const services = [
  ["Oil Change", "Oil and filter replacement for routine vehicle maintenance."],
  ["Brake Inspection", "Brake system check and maintenance recommendations."],
  ["Engine Diagnostics", "Diagnostic inspection to help identify vehicle issues."],
  ["General Service", "A general inspection and maintenance appointment."],
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12">
      <p className="font-bold uppercase tracking-widest text-orange-600">Auto Shop</p>
      <h1 className="mt-2 text-4xl font-black">Our Services</h1>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(([name, description]) => (
          <article key={name} className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            <a href={`/book?service=${encodeURIComponent(name)}`} className="mt-5 inline-block font-bold text-orange-700">
              Book this service
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}