import React from 'react'

function NameStep({ value, onChange }) {
    return (
        <div>
            <h2 className="text-center text-xl font-bold md:text-2xl">
                What's your Name?
            </h2>

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Write your name here..."
                className="mt-8 w-full rounded-full bg-[#203E4C] px-6 py-4 text-white outline-none placeholder:text-white/70"
            />
        </div>
    )
}

export default NameStep