import React from 'react'
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'

function Header() {
    return (
        <header>
            <div className="flex items-center bg-amazon_blue p1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        src="/assets/amazon-logo.png"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                <div className="hidden sm:flex items-center flex-grow cursor-pointer h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
                    <input 
                        type="text" 
                        placeholder="search" 
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus: outline-none" 
                    />
                    <SearchIcon className="h-12 p-4" />
                </div> 

                <div className="text-white flex items-center mx-6 text-xs space-x-6 whitespace-nowrap">
                    <div className="link">
                        <p>Hello, Dark Knight</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>                    
                    <div className="link relative flex items-center">

                        <span className="absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">0</span>

                        <ShoppingCartIcon className="h-10" />
                        <p className="font-extrabold md:text-sm hidden md:inline mt-2">Cart</p>
                    </div>
                </div>              
            </div>

            <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Customer Service</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
            </div>
        </header>
    )
}

export default Header
