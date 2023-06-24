import Features from "@/components/Features";
import Industry from "@/components/Industry";
import LogoWithBg from "@/components/LogoWithBg";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 className="mx-4 mb-8 mt-32 text-center text-4xl font-extrabold leading-tight">
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
      <h1 className="mx-4 mb-11 mt-20 text-center text-2xl font-black leading-snug tracking-wide">
        Trusted by 100,000+ local businesses globally
      </h1>
      <LogoWithBg />
      <Testimonials />
      <h1 className="mx-4 mb-11 mt-20 text-center text-3xl font-extrabold leading-tight">
        Tools to take your business to next level
      </h1>
      <Features />
      <h1 className="mx-4 mb-3 text-center text-3xl font-extrabold leading-tight">
        SalesCaptain is designed for your business
      </h1>
      <h2 className="mx-4 mb-12 text-center font-light">
        Select your industry to see how it works
      </h2>
      <Industry />
      <h1 className="mx-4 mb-20 text-center text-3xl font-extrabold leading-tight">
        Make your business stand out with us
      </h1>
      <h2 className="mb-2 px-5 text-center text-2xl font-extrabold leading-tight">
        Get discovered by more customers
      </h2>
      <h3 className="mb-5 px-5 text-center text-sm font-light leading-snug">
        Higher reviews & better listings make you more discoverable to more
        people organically
      </h3>
      <a href="#">
        <p className="mb-10 text-center font-medium text-blue-600">
          Get started
        </p>
      </a>
      <div className="px-16">
        <img className="mb-28 rounded-md" src="/cta1.webp" alt="" />
      </div>
      <h2 className="mb-4 px-4 text-center text-3xl font-extrabold leading-tight">
        Expert Insights and Resources
      </h2>
      <h3 className="mb-16 px-5 text-center text-sm font-light leading-snug">
        Get the latest business intelligence relevant to your industry, designed
        to help you grow.
      </h3>
      <a href="#">
        <div className="px-5">
          <img className="mb-6 rounded-xl" src="/ctav1.webp" alt="" />
        </div>
        <h2 className="mb-2 px-5 text-center font-semibold tracking-wide">
          Google My Business Basics: How to get more customers from GMB.
        </h2>
        <h3 className="mb-14 px-5 text-center text-sm font-light leading-snug">
          Customers want to find local proprietors on search engines and nearly
          90 percent of that traffic goes to Google.
        </h3>
      </a>
      <a href="#">
        <p className="mb-12 text-center font-semibold text-blue-600">
          View All Resources
        </p>
      </a>
      <div className="bg-stone-800 px-5 py-9">
        <h1 className="mb-4 text-center text-3xl font-extrabold  text-white">
          Ready to grow?
        </h1>
        <p className="mb-12 px-1 text-center text-sm  text-white">
          See why 100,000+ businesses trust us. Book a personalized demo to see
          how SalesCaptain provides you the right tools to grow your business.
        </p>
        <form className="mb-12 px-8">
          <input
            type="email"
            id="email"
            className="mb-5 block w-full rounded-lg border border-slate-300  p-2.5 text-center text-sm text-gray-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-0 focus:ring-sky-500"
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
        <div className="mb-6 flex items-center justify-center gap-3">
          <img className="h-6" src="/stars.webp" alt="" />
          <p className=" text-sm font-extralight text-white">500+ Reviews</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img className="h-4" src="/google.webp" alt="" />
          <img className="h-5" src="/capterra.webp" alt="" />
          <img className="h-4" src="/sofadv.webp" alt="" />
        </div>
      </div>
      <footer className="mb-4 bg-black px-5 py-8">
        <div className="mb-12 flex flex-col gap-2">
          <a
            className=" text-sm font-light text-white decoration-white underline-offset-2 focus:underline"
            href="mailto:example@example.com"
            target="_blank"
          >
            Contact
          </a>
          <a
            className=" text-sm font-light text-white decoration-white underline-offset-2 focus:underline"
            href="mailto:example@example.com"
            target="_blank"
          >
            Careers
          </a>
          <a
            className=" text-sm font-light text-white decoration-white underline-offset-2 focus:underline"
            href="mailto:example@example.com"
            target="_blank"
          >
            Press
          </a>
          <a
            className=" text-sm font-light text-white decoration-white underline-offset-2 focus:underline"
            href="mailto:example@example.com"
            target="_blank"
          >
            Partners
          </a>
          <a
            className=" text-sm font-light text-white decoration-white underline-offset-2 focus:underline"
            href="mailto:example@example.com"
            target="_blank"
          >
            Legal
          </a>
        </div>
        <div className="mb-20 flex flex-col gap-6">
          <div>
            <h1 className="mb-2 text-sm font-semibold text-gray-400">
              US Headquarters
            </h1>
            <p className="pr-40 text-left text-xs font-light text-white">
              447 Broadway, 2nd Floor, New York 10013
            </p>
          </div>
          <div>
            <h1 className="mb-2 text-sm font-semibold text-gray-400">
              India office
            </h1>
            <p className="pr-40 text-left text-xs font-light text-white">
              1467 Janani HSR Layout Bengaluru Karnataka 560102
            </p>
          </div>
          <div>
            <h1 className="mb-2 text-sm font-semibold text-gray-400">
              London office
            </h1>
            <p className="pr-40 text-left text-xs font-light text-white">
              79 - 81 Borough Rd London England 400706
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <a href="#">
            <img className="w-8" src="/socials1.svg" alt="" />
          </a>
          <a href="#">
            <img className="w-8" src="/socials2.svg" alt="" />
          </a>
          <a href="#">
            <img className="w-8" src="socials3.svg" alt="" />
          </a>
          <a href="#">
            <img className="w-8" src="socials4.svg" alt="" />
          </a>
        </div>
      </footer>
      <p className="mb-2 text-center text-xs font-extralight">
        © SalesCaptain Inc 2023 (A division of SalesBook Technologies Pvt Ltd)
      </p>
      <div className="mb-3 flex justify-between px-5 text-xs font-extralight">
        <a href="#">Terms and conditions</a>
        <a href="#">Privacy</a>
        <a href="#">Refund</a>
        <a href="#">CCPA</a>
      </div>
    </main>
  );
}
