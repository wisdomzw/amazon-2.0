import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    
    const [hasPrime] = useState(Math.random() < 0.5)

    return (
        <div className="bg-white p-6 z-50 relative flex flex-col" >            
            <p className="absolute top-2 right-2 italic text-gray-400 text-xs">{category}</p>
            <Image 
                src={image} 
                height={200} 
                width={200} 
                objectFit="contain" 
                alt={title} 
            />

            <h4 className="mt-2">{title}</h4>

            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))
                }
            </div>
            
            <p className="text-xs my-2 line-clamp-3">{description}</p>

            <div className="mb-2">
                <Currency quantity={price} currency="ZAR" className="mb-2" />
            </div>
            
            {
                hasPrime && (
                    <div className="flex items-center space-x-2 -m-t-5">
                        <Image src="https://links.papareact.com/fdw" alt="Prime" height={40} width={40} objectFit="contain"/>
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )
            }
            
            <button className="button w-full mt-auto">Add to Basket</button>
            
        </div>
    )
}

export default Product
