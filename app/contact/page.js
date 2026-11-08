export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <section className="rounded-2xl bg-white p-8 shadow">
        <p className="font-bold uppercase tracking-widest text-orange-600">Auto Shop</p>
        <h1 className="mt-2 text-4xl font-black">Contact Us</h1>
        <p className="mt-4 text-slate-600">Contact us about vehicles, prices, or services.</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <a href="tel:03226026388" className="rounded-xl border p-6 hover:border-orange-500">
            <h2 className="font-bold">Phone</h2>
            <p className="mt-2 text-orange-700">0322 6026388</p>
          </a>

          <div className="rounded-xl border p-6">
            <h2 className="font-bold">Location</h2>
            <p className="mt-2 text-orange-700">Badami Bagh</p>
          </div>
        </div>
      </section>
    </main>
  );
}