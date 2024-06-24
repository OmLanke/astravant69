import React from 'react'


const ApartmentListing = () => {
    return (
        <>
            <div className="items-center justify-center flex flex-row md:flex-col overflow-x-auto">
                <div className="flex flex-row p-2 gap-2">
                    <div className="flex items-center p-[155px]" style={{ backgroundImage: "url('/ast8.png')", borderRadius: '35px' }}>
                        <div className="p-2 border border-2   hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='px-9'>2 BHK</p>
                        </div>
                    </div>
                    <div className="flex items-center p-[155px]" style={{ backgroundImage: "url('/ast9.png') ", borderRadius: '35px' }}>
                        <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='px-9'>2 BHK</p>
                        </div>
                    </div>
                    <div className="flex items-center p-[155px]" style={{ backgroundImage: "url('/ast10.png')", borderRadius: '35px'  }}>
                        <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='px-9'>2 BHK</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row pl-2 pr-2 md:pb-2 gap-2">
                    <div className="flex items-center p-[155px]" style={{ backgroundImage: "url('/ast11.png') ", borderRadius: '35px'  }}>
                        <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='px-9'>2 BHK</p>
                        </div>
                    </div>
                    <div className="flex items-center p-[155px]" style={{ backgroundImage: "url('/ast12.png')", borderRadius: '35px'  }}>
                        <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='px-9'>2 BHK</p>
                        </div>
                    </div>
                    <div className="flex items-center p-[155px]" style={{ backgroundImage: "url('/ast13.png') ", borderRadius: '35px'  }}>
                        <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='px-9'>2 BHK</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApartmentListing
