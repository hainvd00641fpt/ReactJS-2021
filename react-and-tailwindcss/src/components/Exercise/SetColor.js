import React from 'react'

export default function SetColor() {
    return (
        <div>
            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 flex-col">
                <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Set Color</h2>
                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice </p>
                    <div className="inline-flex">
                        <div className="w-10 m-5 bg-red-700 h-10"></div>
                        <div className="w-10 m-5 h-10 bg-green-700"></div>
                        <div className="w-10 m-5 h-10 bg-blue-700"></div>
                        <div className="w-10 m-5 h-10 bg-yellow-700"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
