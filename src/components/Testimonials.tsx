const Testimonials = () => {
  return (
    <div className="mx-6 mb-14 rounded-3xl border border-slate-200 px-5 py-8 text-center">
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
      <h1 className="text-6xl font-bold">40%</h1>
      <h2 className="mb-14 font-light">Average net profit increase</h2>
      <h2 className="mb-3 font-medium">Products used:</h2>
      <div className="flex flex-wrap justify-center gap-3">
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
  );
};

export default Testimonials;
