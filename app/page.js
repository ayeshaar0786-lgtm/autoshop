import Link from "next/link";
import { products } from "../data/products";

export default function HomePage() {
  const featuredProducts = products
    .filter((_, index) => index !== 2)
    .slice(0, 4);

  return (
    <main className="bg-slate-100 text-slate-900">
      <section
        className="px-5 py-20 text-white sm:py-28"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 6, 23, 0.88), rgba(2, 6, 23, 0.35)), url('https://i.pinimg.com/736x/70/1e/c5/701ec506f119cfd6278a3a32b5f668c6.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-widest text-orange-400">
            Welcome to Auto Shop
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-6xl">
            Find the right car or bike for your next journey.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white">
            Browse vehicles and find reliable service in Badami Bagh, Lahore.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-lg bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700"
            >
              Browse Vehicles
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-slate-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-bold uppercase tracking-widest text-orange-600">
                Our Listings
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Featured Cars and Bikes
              </h2>
            </div>

            <Link
              href="/shop"
              className="font-bold text-slate-900 underline underline-offset-4 hover:text-orange-600"
            >
              View all vehicles
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={product.thumbnail || product.image}
                    alt={product.name}
                    className="h-60 w-full bg-white object-contain"
                  />

                  <div className="p-5">
                    <p className="text-sm font-bold uppercase text-orange-600">
                      {product.category}
                    </p>

                    <h3 className="mt-3 text-lg font-bold text-slate-900">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-xl font-extrabold text-slate-900">
                      Rs. {Number(product.price).toLocaleString("en-PK")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-white p-6 text-slate-700">
              Vehicle listings will appear here.
            </p>
          )}
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="font-bold uppercase tracking-widest text-orange-600">
            Auto Shop Services
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
            Need vehicle service?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Choose a service and book a convenient time.
          </p>

         <Link
  href="/services"
  style={{ color: "#ffffff" }}
  className="mt-8 inline-block rounded-lg bg-slate-900 px-7 py-4 font-bold hover:bg-slate-800"
>
  Explore Services
</Link>
        </div>
      </section>
    </main>
  );
}