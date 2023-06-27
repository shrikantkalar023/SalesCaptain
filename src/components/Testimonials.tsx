const Testimonials = () => {
  return (
    <div>
      <div className="mx-6 mb-10 rounded-3xl border border-slate-200 px-5 py-8 text-center">
        <img
          className="mx-auto mb-2 w-14"
          src="/test1.webp"
          alt="a happy customer"
        />
        <h1 className="text-xl font-semibold  tracking-wide">Simon Page</h1>
        <h2 className="mb-8 text-sm font-extralight">
          Owner, Mamagato Restaurant
        </h2>
        <p className="mb-14 text-sm font-light">
          &quot;In 2022 so far we are hitting our best months in customers &
          revenue even in an economic downturn&quot;
        </p>
        <h1 className="text-7xl font-bold">40%</h1>
        <h2 className="mb-14 font-light sm:text-lg">
          Average net profit increase
        </h2>
        <h2 className="mb-3 font-medium sm:text-left">Products used:</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:justify-normal">
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Messaging
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Webchat
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Reviews
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Listings
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Referrals
          </span>
        </div>
      </div>
      <div className="mx-6 mb-10 rounded-3xl border border-slate-200 px-5 py-8 text-center">
        <img
          className="mx-auto mb-2 w-14"
          src="/test2.webp"
          alt="a happy customer"
        />
        <h1 className="text-xl font-semibold  tracking-wide">Daniel Wilson</h1>
        <h2 className="mb-8 text-sm font-extralight">
          Marketing head, The Air Conditioning Company
        </h2>
        <p className="mb-14 text-sm font-light">
          &quot;Our rating improved from 3.3 to 4.6 & reviews are up 200%, we
          are getting more leads from Google&quot;
        </p>
        <h1 className="text-7xl font-bold">200%</h1>
        <h2 className="mb-14 font-light sm:text-lg">Net review growth</h2>
        <h2 className="mb-3 font-medium sm:text-left">Products used:</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:justify-normal">
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Reviews
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Listings
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Messaging
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Webchat
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Customer Manager
          </span>
        </div>
      </div>
      <div className="mx-6 mb-28 rounded-3xl border border-slate-200 px-5 py-8 text-center">
        <img
          className="mx-auto mb-2 w-14"
          src="/test3.webp"
          alt="a happy customer"
        />
        <h1 className="text-xl font-semibold  tracking-wide">Debbie Rose</h1>
        <h2 className="mb-8 text-sm font-extralight">Owner, Jiva luxury Spa</h2>
        <p className="mb-14 text-sm font-light">
          &quot;Effective text & email marketing campaign on SalesCaptain helped
          us make additional $150k in two weeks&quot;
        </p>
        <h1 className="text-7xl font-bold">$150k</h1>
        <h2 className="mb-14 font-light sm:text-lg">
          Generated with marketing campaign
        </h2>
        <h2 className="mb-3 font-medium sm:text-left">Products used:</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:justify-normal">
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Marketing
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Webchat
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Review
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Messaging
          </span>
          <span className="rounded-full bg-blue-200 px-3.5 py-1.5 text-sm font-light text-black">
            Competition & Insights
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
