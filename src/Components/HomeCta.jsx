const HomeCta =()=> {
  return (
    <div className="bg-white mt-16">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-2/5 lg:pr-4 xl:pr-16">
          <img
            src="/charman.png"
            alt="Chairman photo."
            className="h-full w-full object-cover object-center rounded-2xl"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-500">
            India's #1 
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">AstraVant Realty group:India's #1 real estate agency.</p>
            <p className="mt-4 text-gray-500">
            Welcome to the epitome of luxury living In India- our No.1 real estate destination. Here, we redefine. opulence with our exclusive collection of properties, each crafted to perfoction with meticulous attention to detail.
            </p>
            <p className="mt-4 text-gray-500">
            From breathtaking skyline views to lush green landscapes, our portfolio boasts tho pinnacle of architectural marvels. But ts not ust about the properties; is about the experience.
            </p>
            <p className="mt-4 text-gray-500">
            Our esteemed cliente racoivos nothing short of premior and sophisticated service, tailored to thelr every ned: Step into a realm where luxury knows no bounds, and indulge in a lifestyle beyond comparo with us
            </p>
            
          </div>
        </div>
      </section>
    </div>
  )
}
export default HomeCta