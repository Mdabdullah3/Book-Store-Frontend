import { AiOutlineHeart, AiOutlineShoppingCart, AiTwotoneStar } from 'react-icons/ai';
import { useAppDispatch } from '@/redux/hook';
import { addToCart } from '@/redux/features/cart';
import { IBooks } from '@/types/globalTypes';
interface IProps {
    book: IBooks;
}

const ShopCard = ({ book }: IProps) => {

    const dispatch = useAppDispatch()
    const handleAddProduct = (book: IBooks) => {
        dispatch(addToCart(book))
        console.log("product added successfully");
    }

    return (
        <div key={book.id} className='mx-auto w-9/12 group relative overflow-hidden transition-transform transform hover:scale-105' >
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
        </div>
    );
};

export default ShopCard;