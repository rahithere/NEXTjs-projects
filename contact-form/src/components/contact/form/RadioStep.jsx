import React from 'react'

function RadioStep({ question, options, value, onchange }) {
    return (
        <div>
            <h2 className='text-center text-xl font-bold md:text-2xl'>
                {question}
            </h2>

            <div className='flex flex-col mx-auto mt-8 w-fit gap-5'>
                {options.map(option => (
                    <label
                        className='flex cursor-pointer items-center gap-3 text-base md:text-lg'
                        key={option}
                    >
                        <input
                            type="radio"
                            value={option}
                            checked={value === option}
                            onChange={e => onchange(e.target.value)}
                            className='h-4 w-4'
                        />
                        <span>{option}</span>
                    </label>

                ))}
            </div>
        </div>
    )
}

export default RadioStep