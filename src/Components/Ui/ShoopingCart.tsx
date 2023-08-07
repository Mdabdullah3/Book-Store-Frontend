/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { addToCart, removeOne } from '@/redux/features/cart';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {
    HiMinus,
    HiOutlinePlus,
} from 'react-icons/hi';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
const ShoopingCart = () => {
    const { product, total } = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    return (
        <div>
            <body className="bg-gray-100">
                <div className="container mx-auto mt-10">
                    <div className="flex shadow-md my-10">
                        <div className="w-3/4 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                <h2 className="font-semibold text-2xl">{product.length}</h2>
                            </div>
                            <div className="flex mt-10 mb-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                            </div>
                            {
                                product.map(item => <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img className="h-24" src={item.image} alt="product" />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">{item.name}</span>
                                            <span className="text-red-500 text-xs">{item.genre[0]}</span>
                                            <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <Button onClick={() => dispatch(addToCart(item))}>
                                            <></>
                                            <HiOutlinePlus size="20" />
                                        </Button>
                                        <Button onClick={() => dispatch(removeOne(item))}>
                                            <HiMinus size="20" />
                                        </Button>
                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">{item?.price}</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">{(item.price * item.quantity!).toFixed(2)}</span>
                                </div>)
                            }

                            <a onClick={() => navigate(-1)} href="#" className="flex font-semibold text-primary text-sm mt-10">

                                <svg className="fill-current mr-2 text-primary w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                Continue Shopping
                            </a>
                        </div>

                        <div id="summary" className="w-1/4 px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">{product?.length ? product?.length : 0}</span>
                                <span className="font-semibold text-sm">${total}</span>
                            </div>
                            <div>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                                <select className="block p-2 text-gray-600 w-full text-sm">
                                    <option>Standard shipping - $10.00</option>
                                </select>
                            </div>
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>{total ? total : 0}</span>
                                </div>
                                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </body>

        </div>
    );
};

export default ShoopingCart;