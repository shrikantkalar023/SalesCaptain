import Features from "@/components/Features";
import Industry from "@/components/Industry";
import LogoWithBg from "@/components/LogoWithBg";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 className="mx-4 mb-8 mt-32 text-center text-4xl font-extrabold leading-tight sm:mt-40 sm:font-black">
        Best way to grow your local business
      </h1>
      <p className="mb-12 px-4 text-center text-sm font-light leading-6 tracking-wide sm:text-base">
        Artificial Intelligence powered easy-to-use tools to get more customers
        & give them a better experience
      </p>
      <form className="mb-16 px-8 sm:mb-12 sm:flex sm:justify-center sm:gap-4">
        <input
          type="email"
          id="email"
          className="mb-6 block w-full rounded-lg border border-slate-300 p-2.5 text-center text-sm text-gray-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-0 focus:ring-sky-500 sm:mb-0 sm:max-w-2xl sm:basis-3/5 sm:px-3.5 sm:text-left"
          placeholder="ENTER YOUR EMAIL"
          required
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="whitespace-nowrap rounded-lg bg-blue-600  px-7 py-3 text-center text-sm font-bold text-white hover:bg-blue-700"
          >
            GET DEMO
          </button>
        </div>
      </form>
      {/* TODO: remove this flex learn demo
      <div className="flex justify-center gap-4 px-8">
        <div className="max-w-2xl basis-2/3 bg-pink-500">01</div>
        <div className="mx-1 flex justify-center">
          <button
            type="submit"
            className="whitespace-nowrap rounded-lg bg-blue-600  px-7 py-3 text-center text-sm font-bold text-white hover:bg-blue-700"
          >
            GET DEMO
          </button>
        </div>
      </div> */}
      <img src="/happy.webp" alt="happy local business person" />
      <h1 className="mx-4 mb-11 mt-20 text-center text-2xl font-black leading-snug tracking-wide sm:text-4xl">
        Trusted by 100,000+ local businesses globally
      </h1>
      <LogoWithBg />
      <Testimonials />
      <h1 className="mx-4 mb-11 mt-20 text-center text-3xl font-extrabold leading-tight sm:mb-12">
        Tools to take your business to next level
      </h1>
      <Features />
      <h1 className="mx-4 mb-3 text-center text-3xl font-extrabold leading-tight sm:mb-1.5 sm:text-4xl sm:leading-snug">
        SalesCaptain is designed for your business
      </h1>
      <h2 className="mx-4 mb-12 text-center font-light sm:mb-12 sm:text-lg">
        Select your industry to see how it works
      </h2>
      <Industry />
      <h1 className="mx-4 mb-16 text-center text-3xl font-extrabold leading-tight sm:mb-32 sm:text-4xl">
        Make your business stand out with us
      </h1>
      <Services />
      <h2 className="mb-4 px-4 text-center text-3xl font-extrabold leading-tight sm:text-4xl">
        Expert Insights and Resources
      </h2>
      <h3 className="mb-24 px-5 text-center text-sm font-light leading-snug sm:mb-28 sm:text-lg sm:font-normal">
        Get the latest business intelligence relevant to your industry, designed
        to help you grow.
      </h3>
      <div>
        <a href="#">
          <div className="px-5">
            <img className="mb-6 rounded-xl" src="/ctav1.webp" alt="" />
          </div>
          <h2 className="mb-2 px-5 text-center font-semibold tracking-wide hover:text-blue-700 sm:text-left">
            Google My Business Basics: How to get more customers from GMB.
          </h2>
          <h3 className="mb-16 px-5 text-center text-sm font-light leading-snug sm:mb-24 sm:text-left">
            Customers want to find local proprietors on search engines and
            nearly 90 percent of that traffic goes to Google.
          </h3>
        </a>
      </div>
      <div>
        <a href="#">
          <div className="px-5">
            <img className="mb-6 rounded-xl" src="/ctav2.webp" alt="" />
          </div>
          <h2 className="mb-2 px-5 text-center font-semibold tracking-wide hover:text-blue-700 sm:text-left">
            How to use Google&apos;s Business Messaging tool to get new
            customers
          </h2>
          <h3 className="mb-16 px-5 text-center text-sm font-light leading-snug sm:mb-24 sm:text-left">
            Today&apos;s leading businesses aren&apos;t just being found -
            they&apos;re engaging the moment they&apos;re discovered.
          </h3>
        </a>
      </div>
      <div>
        <a href="#">
          <div className="px-5">
            <img className="mb-6 rounded-xl" src="/ctav3.webp" alt="" />
          </div>
          <h2 className="mb-2 px-5 text-center font-semibold tracking-wide hover:text-blue-700 sm:text-left">
            6 Ways to Increase Your Website Traffic and Leads
          </h2>
          <h3 className="mb-14 px-5 text-center text-sm font-light leading-snug sm:mb-16 sm:text-left">
            More than 61% of marketers have reported that attracting traffic to
            their website is their biggest challenge.
          </h3>
        </a>
      </div>
      <a href="#">
        <p className="mb-12 text-center font-semibold text-blue-600">
          View All Resources
        </p>
      </a>
      <div className="bg-stone-950/90 px-5 py-9 sm:bg-stone-950/95">
        <h1 className="mb-4 text-center text-3xl font-extrabold text-white sm:text-4xl">
          Ready to grow?
        </h1>
        <p className="mb-12 px-1 text-center text-sm text-white  sm:text-base">
          See why 100,000+ businesses trust us. Book a personalized demo to see
          how SalesCaptain provides you the right tools to grow your business.
        </p>
        <form className="mb-12 px-8 sm:mb-12 sm:flex sm:justify-center sm:gap-4">
          <input
            type="email"
            id="email"
            className="mb-5 block w-full rounded-lg border border-slate-300 p-2.5 text-center text-sm text-gray-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-0 focus:ring-sky-500 sm:mb-0 sm:max-w-2xl sm:basis-3/5 sm:px-3.5 sm:text-left"
            placeholder="ENTER YOUR EMAIL"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="whitespace-nowrap rounded-lg bg-blue-600 px-7 py-3 text-center text-sm font-bold text-white hover:bg-blue-700"
            >
              GET DEMO
            </button>
          </div>
        </form>
        <div className="mb-6 flex items-center justify-center gap-3">
          <img className="h-6" src="/stars.webp" alt="" />
          <p className=" text-sm font-extralight text-white">500+ Reviews</p>
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <img className="h-4 sm:h-6" src="/google.webp" alt="" />
          <img className="h-5 sm:h-7" src="/capterra.webp" alt="" />
          <img className="h-4 sm:h-6" src="/sofadv.webp" alt="" />
        </div>
      </div>
      <footer className="mb-4 bg-black px-5 py-8">
        <img
          className="mb-14 hidden h-7 object-cover sm:block"
          src="logo_white.webp"
          alt="SalesCaptain logo"
        />
        <div className="sm:grid sm:grid-cols-3 sm:gap-20">
          <div className="mb-12 flex flex-col gap-2 sm:hidden">
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="mailto:example@example.com"
              target="_blank"
            >
              Contact
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="mailto:example@example.com"
              target="_blank"
            >
              Careers
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="mailto:example@example.com"
              target="_blank"
            >
              Press
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="mailto:example@example.com"
              target="_blank"
            >
              Partners
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
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
              <a href="#">
                <p className="pr-40 text-left text-xs font-light text-white underline-offset-2 hover:underline sm:pr-0">
                  447 Broadway, 2nd Floor, New York 10013
                </p>
              </a>
            </div>
            <div>
              <h1 className="mb-2 text-sm font-semibold text-gray-400">
                India office
              </h1>
              <a href="#">
                <p className="pr-40 text-left text-xs font-light text-white underline-offset-2 hover:underline sm:pr-0">
                  1467 Janani HSR Layout Bengaluru Karnataka 560102
                </p>
              </a>
            </div>
            <div>
              <h1 className="mb-2 text-sm font-semibold text-gray-400">
                London office
              </h1>
              <a href="#">
                <p className="pr-40 text-left text-xs font-light text-white underline-offset-2 hover:underline sm:pr-0">
                  79 - 81 Borough Rd London England 400706
                </p>
              </a>
            </div>
          </div>
          <div className="mb-12 hidden flex-col gap-2 sm:flex sm:gap-0.5">
            <h1 className="mb-2 text-sm font-semibold text-gray-400">
              Company
            </h1>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="mailto:example@example.com"
              target="_blank"
            >
              Contact
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="mailto:example@example.com"
              target="_blank"
            >
              Careers
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="mailto:example@example.com"
              target="_blank"
            >
              Press
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="mailto:example@example.com"
              target="_blank"
            >
              Partners
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="mailto:example@example.com"
              target="_blank"
            >
              Legal
            </a>
            <h1 className="mb-2 mt-6 text-sm font-semibold text-gray-400">
              Partner
            </h1>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="mailto:example@example.com"
              target="_blank"
            >
              Become a Partner
            </a>
          </div>
          <div className="mb-12 hidden flex-col gap-2 sm:flex sm:gap-0.5">
            <h1 className="mb-2 text-sm font-semibold text-gray-400">
              Industry
            </h1>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="#"
              target="_blank"
            >
              Healthcare
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="#"
              target="_blank"
            >
              Dental
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="#"
              target="_blank"
            >
              Home Services
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="#"
              target="_blank"
            >
              Retail
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="#"
              target="_blank"
            >
              Hospitality
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="#"
              target="_blank"
            >
              Automotive
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="#"
              target="_blank"
            >
              Restaurants
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="#"
              target="_blank"
            >
              Wellness
            </a>
            <a
              className=" text-sm font-light text-white decoration-white underline-offset-2 hover:underline"
              href="#"
              target="_blank"
            >
              Professional Services
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-2 sm:justify-end">
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
