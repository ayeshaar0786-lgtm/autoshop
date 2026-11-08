"use client";

import { useState } from "react";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  function submitBooking(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const service = form.get("service");
    const date = form.get("date");

    const message = `Auto Shop service booking%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ADate: ${date}`;
    window.open(`https://wa.me/923226026388?text=${message}`, "_blank");
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <form onSubmit={submitBooking} className="rounded-2xl bg-white p-7 shadow">
        <h1 className="text-3xl font-black">Book a Service</h1>
        <p className="mt-2 text-slate-600">Complete the form to contact Auto Shop on WhatsApp.</p>

        <div className="mt-6 grid gap-4">
          <input name="name" required placeholder="Your name" className="rounded-lg border px-4 py-3" />
          <input name="phone" required placeholder="Phone number" className="rounded-lg border px-4 py-3" />
          <input name="service" required placeholder="Service required" className="rounded-lg border px-4 py-3" />
          <input name="date" required type="date" className="rounded-lg border px-4 py-3" />
          <button className="rounded-lg bg-orange-600 px-5 py-3 font-bold text-white">Send Booking Request</button>
        </div>

        {submitted && <p className="mt-4 text-sm text-green-700">Your WhatsApp booking message is ready.</p>}
      </form>
    </main>
  );
}