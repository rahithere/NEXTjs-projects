import React from 'react'

function NavigateButton({
    onPrevious,
    onNext,
    showPrevious, // hides if its the first question
    isLastStep,   // next --> submit on last field
    isSubmitting,
}) {
    return (
        <div className='mt-8 flex items-center justify-center gap-4'>
            {showPrevious && (
                <button
                    type='button'
                    onClick={onPrevious}
                    className='cursor-pointer rounded-full border border-white/15 px-6 py-3 text-white transition hover:bg-white/10'
                >
                    Previous
                </button>
            )}

            <button
                type={isLastStep ? "submit" : "button"}
                onClick={isLastStep ? undefined : onNext}
                className='cursor-pointer rounded-full bg-[#A9FD00] px-8 py-3 font-bold text-black transition hover:opacity/90'
            >
                {isSubmitting ? "Sending" : isLastStep ? "Submit" : "Next"}
            </button>
        </div>
    )
}

export default NavigateButton