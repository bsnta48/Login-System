import React from 'react'

const Product = () => {
    return (
        <>
            <div className='animate-pulse w-full h-full left-0 top-0 p-8 overflow-hidden border rounded'>
                <div className='pt-[100%] bg-slate-200 rounded'></div>
            </div>
            <div className='animate-pulse space-y-4'>
                <div class="h-4 bg-slate-200 rounded"></div>
                <div class="h-4 w-[30%] bg-slate-200 rounded"></div>
                <div class="h-2 w-[50px] bg-slate-200 rounded"></div>
                <div class="h-3 bg-slate-200 rounded"></div>
                <div class="h-3 bg-slate-200 rounded"></div>
                <div class="h-3 w-[150px] bg-slate-200 rounded"></div>
            </div>
        </>
    )
}

export default Product