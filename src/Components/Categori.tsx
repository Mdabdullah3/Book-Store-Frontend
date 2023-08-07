import React from 'react';
import { Slider } from './Ui/Slider';

const Categori = () => {
    const handleSlider = (value: number[]) => {
        console.log(value);
    };
    const priceRange = 100;

    return (
        <div>
            <div className='bg-white px-10 py-8 mt-20 w-52 shadow'>
                <h1 className='text-xl text-secondary tracking-wide'> Categories</h1>
                <h1 className='border mt-1 w-11/12 border-primary'></h1>
                <div className='text-md text-secondary tracking-wider mt-3'>
                    <h1 className='pt-2'>Drama</h1>
                    <h1 className='pt-2'>Fantasy</h1>
                    <h1 className='pt-2'>Fun</h1>
                    <h1 className='pt-2'>For Kid</h1>
                    <h1 className='pt-2'>Advancer</h1>
                    <h1 className='pt-2'>Science</h1>
                    <h1 className='pt-2'>History</h1>
                </div>
                <div className="space-y-3 mt-6">
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
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Categori;