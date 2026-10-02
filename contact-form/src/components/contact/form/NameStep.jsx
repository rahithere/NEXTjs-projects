import React from 'react'

function NameStep({ value, onChange, error }) {
    return (
        <div>
            <h2 className="text-center text-xl font-bold md:text-2xl">
                What's your Name?
            </h2>

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={error ? "name is required " : "Write your name here..."}
                className={
                    `mt-8 w-full rounded-full bg-[#203E4C] px-6 py-4 text-white outline-none
                    ${error ? "placeholder:text-red-500/70" : "placeholder:text-white/70"}`
                }
            />
        </div>
    )
}

export default NameStep