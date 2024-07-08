import React from 'react'
import OsOne from '../Components/OsOne'
import OsTwi from '../Components/OsTwi'
import OsMain from '../Components/OsMain.jsx'

const OurService = () => {
    return (
        <>
            <OsOne />
            <OsTwi />
            <OsMain
                backgroundColor='bg-[#72383D]'
                title='Luxury Property Consultation in Mumbai'
                description="Discover Mumbai's finest real estate with our expert consultation service. At Astravant Realty, we connect global clients with prestigious properties in India's financial capital."
                expertiseTitle='Our Expertise:'
                expertiseList={[
                    'Ultra-luxury properties in prime Mumbai locations',
                    'Exclusive listings, including off-market opportunities',
                    'Tailored solutions for international buyers',
                    'Expert knowledge of Mumbai\'s high-end real estate market',
                    'Investment guidance for Mumbai\'s luxury market'
                ]}
                processTitle='Our Process:'
                processList={[
                    'Understand your needs and investment goals',
                    'Curate exclusive Mumbai listings',
                    'Provide virtual tours for overseas clients',
                    'Offer insights on Mumbai real estate trends',
                    'Manage negotiations and transactions'
                ]}
                buttonText='Connect with our experts'
                buttonLink='/contactus' // add link to button
                imageUrl='sofa.png'
                imageAlt='Luxury Property Consultation'
            />
            <OsMain
                backgroundColor='bg-[#322D29]'
                title='Property Buying and Selling in Mumbai'
                description="Simplify your Mumbai real estate journey with Astravant Realty. We expertly guide local and global clients through buying and selling properties in India's financial capital."
                expertiseTitle='Our Services:'
                expertiseList={[
                    'Curated Mumbai property listings',
                    'Strategic marketing for sellers',
                    'Expert negotiations and efficient transactions',
                    'Guidance on Mumbai real estate trends',
                    'Support for NRI property investors'
                ]}
                processTitle='Benefits:'
                processList={[
                    'In-depth knowledge of Mumbai\'s property market',
                    'Access to exclusive deals',
                    'Tailored approach for each client',
                    'Streamlined buying and selling process'
                ]}
                buttonText='Find your dream property'
                buttonLink='/search' // add link to button
                imageUrl='grsofa.png'
                imageAlt='Property Buying and Selling'
            />
            <OsMain
                backgroundColor='bg-[#72383D]'
                title='Market Analysis Services for Mumbai Real Estate'
                description="Make informed decisions in Mumbai's dynamic property market with our expert market analysis services. Astravant Realty provides crucial insights to help you navigate Mumbai's real estate landscape."
                expertiseTitle='Our Expertise:'
                expertiseList={[
                    'Mumbai property price trends',
                    'Neighborhood value comparisons',
                    'Investment potential in emerging Mumbai areas',
                    'Luxury real estate market forecasts',
                    'Commercial property sector analysis'
                ]}
                processTitle='Key Benefits:'
                processList={[
                    'Up-to-date Mumbai real estate trends',
                    'Informed investment decisions',
                    'Identification of high-potential areas',
                    'Customized reports for your property goals',
                    'Expert interpretation of market data'
                ]}
                buttonText='Connect with our experts'
                buttonLink='/contactus' // add link to button
                imageUrl='grw.png'
                imageAlt='Market Analysis Services'
            />
        </>
    )
}

export default OurService