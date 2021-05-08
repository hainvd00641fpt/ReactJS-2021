import React from 'react'

export default function SetSize() {
    return (
        <div>
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 flex-col">
                <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Size </h2>
                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice</p>
                    <div className="">
                        <button className="bg-blue-500 p-2 text-white rounded m-2">reduced</button>
                        <button className="bg-blue-500 p-2 text-white rounded m-2">increase</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
