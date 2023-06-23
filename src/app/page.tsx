import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <h1 className="mx-4 mb-8 mt-32 text-center text-4xl font-extrabold leading-normal">
        Best way to grow your local business
      </h1>
      <p className="mb-12 px-4 text-center text-sm font-light leading-6 tracking-wide">
        Artificial Intelligence powered easy-to-use tools to get more customers
        & give them a better experience
      </p>
      <form className="mb-16 px-8">
        <input
          type="email"
          id="email"
          className="mb-6 block w-full rounded-lg border border-slate-300  p-2.5 text-center text-sm text-gray-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-0 focus:ring-sky-500"
          placeholder="ENTER YOUR EMAIL"
          required
        />
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-7 py-3 text-center text-sm font-bold text-white hover:bg-blue-700"
          >
            GET DEMO
          </button>
        </div>
      </form>
      <img src="/happy.webp" alt="happy local business person" />
    </main>
  );
}
