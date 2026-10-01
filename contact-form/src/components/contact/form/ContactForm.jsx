'use client'

import React from 'react'
import { useState } from 'react'

import { NameStep, EmailStep, RadioStep, NavigateButton, } from './exportField.js'

function ContactForm() {

    const [currentStep, setCurrentStep] = useState(0)

    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            answerOne: "",
            answerTwo: "",
        }
    )

    const handleNext = () => {
        setCurrentStep(prev => prev + 1)
    }

    const handlePrevious = () => {
        setCurrentStep(prev => prev - 1)
    }



    return (
        <div className='mx-auto w-full max-w-3xl rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-10 md:px-12 md:py-12'>
            <form>
                {currentStep == 0 && (
                    <NameStep
                        value={formData.name}
                        onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
                    />
                )}

                {currentStep == 1 && (
                    <EmailStep
                        value={formData.email}
                        onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
                    />
                )}

                {currentStep == 2 && (
                    <RadioStep
                        question={"How long have you been in business?"}
                        options={["Less than 1 year", "1-2 years", "2-5 years", "More than 5 years"]}
                        value={formData.answerOne}
                        onchange={(value) => setFormData((prev) => ({ ...prev, answerOne: value }))}
                    />
                )}

                {currentStep == 3 && (
                    <RadioStep
                        question={"What’s your monthly recurring revenue?"}
                        options={["Less than $5,000", "$5,000-$10,000", "More than $10,000"]}
                        value={formData.answerTwo}
                        onchange={(value) => setFormData((prev) => ({ ...prev, answerTwo: value }))}
                    />
                )}

                {/* navigation buttons */}
                <NavigateButton
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    showPrevious={currentStep > 0}
                    isLastStep={currentStep === 3}
                />
            </form>
        </div>
    )
}

export default ContactForm