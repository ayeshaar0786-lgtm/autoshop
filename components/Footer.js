import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="text-2xl font-extrabold">
            Auto <span className="text-orange-500">Shop</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
            Car and bike parts, helpful service, and support for your vehicle.
          </p>
        </div>

        <div>
          <h2 className="font-bold">Quick Links</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li><Link className="hover:text-white" href="/">Home</Link></li>
            <li><Link className="hover:text-white" href="/shop">Shop Parts</Link></li>
            <li><Link className="hover:text-white" href="/services">Services</Link></li>
            <li><Link className="hover:text-white" href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <a className="hover:text-white" href="tel:03226026388">
                0322 6026388
              </a>
            </li>
            <li>Badami Bagh, Lahore</li>
            <li>
              <a
                className="hover:text-white"
                href="https://wa.me/923226026388"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Visit Our Shop</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Find us in Badami Bagh, Lahore. Call us for product availability
            and service details.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 px-5 py-5 text-center text-sm text-slate-400">
        © 2026 Auto Shop. All rights reserved.
      </div>
    </footer>
  );
}