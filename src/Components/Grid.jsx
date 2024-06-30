
import db from '../assets/db.json'
import CardHome from '../Components/CardHome'


export default function Example() {
  return (
    <ul role="list" className="overflow-x-auto grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {db.map((property , index) => (
        <li key={index} className="overflow-hidden rounded-xl border border-gray-200">
            <CardHome name={property.name} bhk={property.bhk} id={index} area={property.area} imgurl={property.imgurl} address={property.address} parking={property.parking} verified={property.verified} price={property.price}/>
        </li>
      ))}
    </ul>
  )
}
