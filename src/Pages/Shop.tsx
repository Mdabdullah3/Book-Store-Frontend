/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import Navbar from '@/layout/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import logo from "../assets/Logo/logo_250x80_crop_center@2x.webp"
import { SlHandbag } from 'react-icons/sl';
import { IBooks } from '@/types/globalTypes';
import { useAppSelector } from '@/redux/hook';
import { Link } from 'react-router-dom';
import ShopCard from '@/Components/ShopCard';
import noProudct from "../assets/no-product-found.png"
const Shop: React.FC = () => {
    const [books, setBooks] = useState<IBooks[]>([])
    const { product, total } = useAppSelector(state => state.cart)
    useEffect(() => {
        const url = 'data-for-db.json';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // setItems(data)
                setBooks(data)

            })
    }, [])


    // const dataSearch = books.filter((item: any) => {
    //     return Object.keys(item).some((key) =>
    //         item[key]
    //             .toString()
    //             .toLowerCase()
    //             .includes(filter.toString().toLowerCase())
    //     );
    // });

    // console.log(filter);

    // const [items, setItems] = useState([...books]);

    // const filterItem = (categItem: any) => {
    //     const updatedItems = ([...items]).filter((item: any) => {
    //         const data = item.genre.includes(categItem);
    //         return data
    //     });
    //     return updatedItems
    // };

    const [searchFilter, setSearchFilter] = useState<string>("");
    const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

    const searchEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(event.target.value);
    };

    const filteredBooks = books.filter((item: any) => {
        const searchData = Object.values(item).some((value: any) =>
            value.toString().toLowerCase().includes(searchFilter.toLowerCase())
        );

        const categoryData =
            categoryFilter === null || item.genre.includes(categoryFilter);

        return searchData && categoryData;
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
                            value={searchFilter}
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
                    <div className='bg-white px-10 py-8 mt-20 w-52 shadow'>
                        <h1 className='text-xl text-secondary tracking-wide'> Categories</h1>
                        <h1 className='border mt-1 w-11/12 border-primary'></h1>
                        <div className='text-md text-secondary tracking-wider mt-3 cursor-pointer'>
                            <h1 onClick={() => setCategoryFilter("Drama")} className='pt-2 cur'>Drama</h1>
                            <h1 onClick={() => setCategoryFilter("Fantasy")} className='pt-2'>Fantasy</h1>
                            <h1 onClick={() => setCategoryFilter("Fun")} className='pt-2'>Fun</h1>
                            <h1 onClick={() => setCategoryFilter("ForKid")} className='pt-2'>For Kid</h1>
                            <h1 onClick={() => setCategoryFilter("Advancer")} className='pt-2'>Advancer</h1>
                            <h1 onClick={() => setCategoryFilter("Science")} className='pt-2'>Science</h1>
                            <h1 onClick={() => setCategoryFilter("History")} className='pt-2'>History</h1>
                        </div>
                        {/* <div className="space-y-3 mt-6">
                            <h1 className="text-xl tracking-wider">Price Range</h1>
                            <h1 className='border mt-1 w-11/12 border-primary'></h1>
                            <div>From 0$ To {priceRange}$</div>

                            <div className="max-w-xl">
                                <Slider
                                    defaultValue={[150]}
                                    max={150}
                                    min={0}
                                    step={1}
                                    onValueChange={(value) => handleSlider(value)}
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='ml-10 grid grid-cols-1 md:grid-cols-4 w-10/12 mx-auto mt-24 relative'>
                    {filteredBooks.length > 0 ?
                        filteredBooks.map((book: IBooks) => <ShopCard book={book}></ShopCard>) : <div>
                            <img className=' absolute w-9/12 left-40' src={noProudct} alt="" />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};
export default Shop;