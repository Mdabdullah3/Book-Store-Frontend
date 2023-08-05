import React from 'react';
import Bookmark from './Ui/Bookmark';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            genre: ["advancer", "fun"],
            image: "http://exprostudio.com/html/book_library/images/blog/img-01.jpg",
            name: "Where The Wild Things Are",
            Author: "Kathrine Culbertson",
            Published: "Sep 10, 2021"

        },
        {
            "name": "All She Wants To Do Is Dance",
            "image": "http://exprostudio.com/html/book_library/images/blog/img-02.jpg",
            "genre": ["Advancer", "Fun", "Science"],
            "Author": "Cheng Ciao",
            "Published": "May 12, 2020",
        },
        {
            "name": "Why Walk When You Can Climb?",
            "image": "http://exprostudio.com/html/book_library/images/blog/img-03.jpg",
            "genre": ["Advancer", "Fun", "Science"],
            "Author": "Angela Guninery",
            "Published": "Aug 09, 2022",
        },
        {
            "name": "Dance Like Nobody’s Watching",
            "image": "http://exprostudio.com/html/book_library/images/blog/img-04.jpg",
            "genre": ["Advancer", "Fun", "Science"],
            "Author": "Angela Guninery",
            "Published": "Jun 29, 2022",
        }
    ]
    return (
        <div className='w-11/12 mx-auto bg-white mt-20'>
            <div className='w-10/12 pt-20 mx-auto'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-xl tracking-wider text-primary'>Taste The New Spice</h1>
                        <p className='text-3xl font-medium text-secondary tracking-wider'>New Release Books</p>
                    </div>
                    <div>
                        <button className=' border px-6 py-3 border-primary hover:bg-primary hover:text-white rounded-3xl text-md tracking-wider text-[#484848]'>View All</button>
                    </div>

                </div>
                <br />
                <div className='border border-[#6969692d]'>

                </div>
                <br />
                <div className='grid grid-cols-1 md:grid-cols-4 pt-4'>
                    {
                        blogs.map((item) => <div key={item?.name}>
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='mt-4'>
                                <h1 className='text-sm capitalize text-[#696969] tracking-wider my-2'>{item?.genre[0]}, {item?.genre[1]}, {item?.genre[2]}</h1>
                                <h1 className='border w-10/12 border-[#6969692d]'></h1>
                            </div>
                            <h1 className='border w-11/12 border-[#6969692d]'></h1>
                            <div className='mt-4'>
                                <h1 className='bg-primary px-2 text-white my-2 w-3/12'>Featured</h1>
                                <h1 className='text-lg font-medium tracking-wide text-secondary'>{item.name}</h1>
                                <h2 className='text-[#696969] mt-3'>By: {item.Author}</h2>
                            </div>
                            <div className='w-10/12 mb-20'>
                                <Bookmark />
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;