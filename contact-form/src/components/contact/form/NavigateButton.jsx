import React from 'react'

function NavigateButton({
    onPrevious,
    onNext,
    showPrevious, // hides if its the first question
    isLastStep,   // next --> submit on last field

}) {
    return (
        <div className='mt-8 flex items-center justify-center gap-4'>
            {showPrevious && (
                <button
                    type='button'
                    onClick={onPrevious}
                    className='rounded-full border border-white/15 px-6 py-3 text-white transition hover:bg-white/10'
                >
                    Previous
                </button>
            )}

            <button
                type='button'
                onClick={onNext}
                className='rounded-full bg[#A9FD00] px-8 py-3 font-bold text-black transition hover:opacity/90'
            >
                {isLastStep ? "Submit" : "Next"}
            </button>
        </div>
    )
}

export default NavigateButton