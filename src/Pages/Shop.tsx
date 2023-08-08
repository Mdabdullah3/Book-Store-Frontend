/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import Navbar from '@/layout/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import logo from "../assets/Logo/logo_250x80_crop_center@2x.webp"
import { SlHandbag } from 'react-icons/sl';
import Categori from '@/Components/Categori';
import { IBooks } from '@/types/globalTypes';
import { AiOutlineHeart, AiOutlineShoppingCart, AiTwotoneStar } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addToCart } from '@/redux/features/cart';
import { Link } from 'react-router-dom';

const Shop: React.FC = () => {
    const [books, setBooks] = useState<IBooks[]>([])

    const { product, total } = useAppSelector(state => state.cart)
    useEffect(() => {
        const url = 'data-for-db.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    const dispatch = useAppDispatch()
    const handleAddProduct = (book: IBooks) => {
        dispatch(addToCart(book))
        console.log("product added successfully");
    }

    const [filter, setFilter] = useState<string>("")
    const searchEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    let dataSearch = books.filter((item: any) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filter.toString().toLowerCase())
        );
    });

    return (
        <div>
            <Navbar />
            <div className='w-11/12 mx-auto bg-white mt-32'>
                <div className='w-10/12 mx-auto pt-16 flex items-center pb-16'>
                    <div>
                        <img src={logo} alt="" />
                        <h1 className='text-3xl  text-secondary tracking-wider ml-8 mt-2'>Online Store</h1>
                    </div>
                    <div className="bg-info border-b-2 border-primary relative overflow-hidden w-5/12 p-0 mx-auto">
                        <input
                            type="text"
                            className="placeholder-secondary border-none px-6 text-sm font-mono input py-4 w-full text-secondary"

                            placeholder="Search by title, author, or genre"
                            value={filter}
                            onChange={searchEvent.bind(this)}
                        />
                        <h1 className="p-5 absolute uppercase -top-2 right-0 text-white bg-primary text-md ">
                            Search
                        </h1>
                    </div>
                    <div>
                        <div className='flex relative items-center gap-4 text-xl'>
                            <Link to="/shoppingCart">
                                <h1 className='text-5xl relative cursor-pointer'><SlHandbag /></h1>
                                <p className=' absolute top-9 left-8 cursor-pointer px-3 text-white py-[3px] bg-primary rounded-full'>{product?.length ? product.length : 0}</p>
                            </Link>
                            <div className='ml-2'>
                                <h1 className='text-md font-semibold text-secondary tracking-wider font-mono'>My Cart</h1>
                                <h1 className='text-sm font-semibold text-primary'>$ {(total).toFixed(2)}</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='w-10/12 mx-auto flex justify-between '>
                <div>
                    <Categori />
                </div>
                <div className='ml-10 grid grid-cols-1 md:grid-cols-4 w-10/12 mx-auto mt-24'>
                    {
                        dataSearch.map((book: IBooks) => <div key={book.id} className='mx-auto w-9/12 group relative overflow-hidden transition-transform transform hover:scale-105' >
                            <div>
                                <img className=' mb-6' src={book.image} alt="" />
                            </div>
                            <div>
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
                                    <button onClick={() => handleAddProduct(book)} className='border px-4 py-2 border-[#696969] hover:bg-primary hover:text-white rounded-3xl text-sm tracking-wider text-[#484848] mt-4'><h1 className='flex items-center gap-2'><AiOutlineShoppingCart />Add To Cart</h1></button>
                                    <div className="transition-opacity absolute opacity-0 group-hover:opacity-100 top-1/4 left-6 p-2 bg-primary text-white">
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