import React from 'react'

const ProductList = ({ count }) => {
    return (
        [...Array(count)].map((e, i) => {
            return (
                <div key={i} className="animate-pulse space-y-4">
                    <div className='p-2 overflow-hidden border rounded'>
                        <div className='pt-[100%] bg-slate-200 rounded'></div>
                    </div>
                    <div class="h-4 bg-slate-200 rounded"></div>
                    <div class="h-4 w-[50%] bg-slate-200 rounded"></div>
                    <div class="h-2 w-[50px] bg-slate-200 rounded"></div>
                </div>
            )
        })
    )
}

export default ProductList