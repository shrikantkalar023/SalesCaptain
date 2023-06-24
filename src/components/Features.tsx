const Features = () => {
  return (
    <div className="mx-6 mb-20 rounded-3xl border border-slate-200 px-6 py-8">
      <h1 className="mb-1 text-2xl font-medium text-blue-600">Attract</h1>
      <p className="mb-8 font-extralight">Attract more customers</p>
      <div className="mb-5 flex items-start gap-3 border-b border-slate-200 pb-5">
        <img className="w-10" src="/star_reviews.svg" alt="" />
        <div>
          <h2 className="mb-1 font-black ">Reviews</h2>
          <p className="text-xs font-light">
            Improve ratings & get chosen more.
          </p>
        </div>
      </div>
      <div className="mb-5 flex items-start gap-3 border-b border-slate-200 pb-5">
        <img className="w-10" src="/location.svg" alt="" />
        <div>
          <h2 className="mb-1 font-black ">Listings</h2>
          <p className="text-xs font-light">
            Improve listings & get seen more.
          </p>
        </div>
      </div>
      <div className="mb-5 flex items-start gap-3 border-b border-slate-200 pb-5">
        <img className="w-10" src="/speaker_marketing.svg" alt="" />
        <div>
          <h2 className="mb-1 font-black ">Marketing</h2>
          <p className="text-xs font-light">
            React out to customers on text & email.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <img className="w-10" src="/smartpages_router.svg" alt="" />
        <div>
          <h2 className="mb-1 font-black ">SmartPages</h2>
          <p className="text-xs font-light">Engage more with our AI SEO.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
