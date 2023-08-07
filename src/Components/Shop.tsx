import { IBooks } from '@/types/globalTypes';
import React, { useEffect, useState } from 'react';
import { AiTwotoneStar, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [books, setBooks] = useState<IBooks[]>([])
    useEffect(() => {
        const url = 'data-for-db.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books);
    return (
        <div className='w-11/12 mx-auto bg-white mt-20'>
            <div className='w-10/12 mx-auto pt-10 '>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-xl tracking-wider text-primary'>Taste The New Spice</h1>
                        <p className='text-3xl font-medium text-secondary tracking-wider'>New Release Books</p>
                    </div>
                    <div>
                        <Link to="/shop">

                            <button className=' border px-6 py-3 border-primary hover:bg-primary hover:text-white rounded-3xl text-md tracking-wider text-[#484848]'>View All</button></Link>
                    </div>

                </div>
                <br />
                <div className='border border-[#6969692d]'>

                </div>
                <div className='pt-10 grid grid-cols-2 md:grid-cols-6'>
                    {
                        books.map(book => <div className='group w-full relative overflow-hidden transition-transform transform hover:scale-105'>
                            <div className=''>
                                <img className='w-40' src={book.image} alt="Books" />
                                <h1 className='text-sm capitalize text-[#696969] tracking-wider my-2'>{book?.genre[0]}, {book?.genre[1]}, {book?.genre[2]}</h1>
                                <h1 className='border w-10/12 border-[#6969692d]'></h1>
                            </div>
                            <div>
                                <h1 className='text-md pt-3 w-10/12 text-secondary font-semibold tracking-wider'>{book?.name}</h1>
                                <h2 className='pt-2 text-md tracking-wide text-[#696969]'>By: {book?.Author}</h2>
                                <h3 className='flex items-center gap-2'>
                                    {Array.from(Array(parseInt(book?.rating)), (e, i) => (
                                        <AiTwotoneStar
                                            key={i}
                                            className="w-3 text-xl text-yellow-500"
                                        />
                                    ))}
                                </h3>
                                <h2 className='text-xl font-bold text-primary mt-3'>${book?.price}</h2>
                                <div className='mb-20 flex items-center gap-4  w-11/12 mx-auto'>
                                    <button className='border px-4 py-2 border-[#696969] hover:bg-primary hover:text-white rounded-3xl text-sm tracking-wider text-[#484848] mt-4'><h1 className='flex items-center gap-2'><AiOutlineShoppingCart />Add To Cart</h1></button>
                                    <div className="transition-opacity absolute opacity-0 group-hover:opacity-100 top-1/4 right-1/4 p-2 bg-primary text-white">
                                        <button className="flex items-center gap-2">Add to Wishlist <AiOutlineHeart /> </button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;