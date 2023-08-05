import React from 'react';
import topImg from "../../assets/About/single-image-01.png"
import about1 from "../../assets/About/icon-01.png"
import about2 from "../../assets/About/icon-02.png"
import about3 from "../../assets/About/icon-03.png"
import { MdNavigateNext } from 'react-icons/md';
const About = () => {
    const books = [
        {
            id: 1,
            icon: about2,
            title: "Trending",
            name: "Book review",
            des: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qused do eiusmod"
        },
        {
            id: 2,
            icon: about1,
            title: "Featured",
            name: "Top Picks",
            des: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qused do eiusmod"
        },
        {
            id: 3,
            icon: about3,
            title: "Books",
            name: "This Month",
            des: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qused do eiusmod"
        }
    ]
    return (
        <div className='w-11/12 mt-20 mx-auto bg-white'>
            <div className='flex pt-10 justify-center'>
                <img src={topImg} alt="" />
            </div>
            <div>
                <h1 className='text-6xl mt-6 text-secondary text-center font-medium tracking-wider'>Welcome to Auteur</h1>
                <p className='mt-5 text-2xl font-medium tracking-widest text-primary text-center'>A MONTHLY BOOK REVIEW PUBLICATION</p>
                <p className='text-md text-[#7E7E7E] mt-4 tracking-wider w-7/12 mx-auto text-center'>Auteur is a monthly book review publication distributed to 400,000 avid readers through subscribing bookstores and public libraries. Founded in 1988 and located in Nashville, Tennessee, BookPage serves as a broad-based selection guide to the best new books published every month.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-20 w-10/12 mx-auto'>
                {
                    books.map(book => <div key={book.id}>
                        <div className='ml-auto w-11/12'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <img src={book.icon} alt="" />
                                </div>
                                <div className=''>
                                    <p className='text-xl uppercase tracking-widest text-[#696969]'>{book.title}</p>
                                    <h1 className=' tracking-wider text-4xl font-[500] text-secondary'>{book.name}</h1>
                                </div>
                            </div>
                            <p className='w-10/12 mt-4 text-left leading-relaxed tracking-wide text-[#7E7E7E]'>{book.des}</p>
                            <h1 className='text-sm font-semibold text-primary tracking-wider uppercase mt-8 flex items-center gap-3'>View More  <div className='text-primary text-xl flex items-center'> <h1><MdNavigateNext /></h1>
                                <h1 className='-ml-4 text-primary'><MdNavigateNext /></h1>
                            </div></h1>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default About;