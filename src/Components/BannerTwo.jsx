const BannnerTwo = () => {
    return (
        <div className="relative bg-white">
            
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  
                  <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                  Trending Locations
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                  There is nothing like it  anywhere. This is a once-in-a-lifetime opportunity to possess a natural oasis located in the exclusive neighborhood of Port Royal, the ultimate setting for creating a lifestyle of custom luxury.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="/contact"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                     Learn More
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                <img
                  className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                  src="/bui.png"
                  alt=""
                />
              </div>
            </div>
            
          </div>
    );
    }
export default BannnerTwo;