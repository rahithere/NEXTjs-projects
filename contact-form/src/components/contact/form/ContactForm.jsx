'use client'

import React from 'react'
import { useState } from 'react'

import { NameStep, EmailStep, RadioStep, NavigateButton, } from './exportField.js'

function ContactForm() {

    const [currentStep, setCurrentStep] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            answerOne: "",
            answerTwo: "",
        }
    )
    const [emptyError, setEmptyError] = useState("")

    // logic to handle empty input field 
    const stepsFields = {
        0: "name",
        1: "email",
        2: "answerOne",
        3: "answerTwo",
    }

    const emailRegex = /^[\w -\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    const handleNext = () => {
        const field = stepsFields[currentStep]

        if (!formData[field]?.trim()) {
            setEmptyError(field)
            return
        }

        // check email validity 
        if (field === "email" && !emailRegex.test(formData.email.trim())) {
            setEmptyError("email");
            return;
        }

        setEmptyError("")
        setCurrentStep(prev => prev + 1)
    }

    const handlePrevious = () => {
        setCurrentStep(prev => prev - 1)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const result = await response.json()
            console.log(result)
            if (result.success) setSubmitted(true)
        } catch (error) {
            console.error("Submission Failed", error)
        }
    }
    console.log(emptyError);

    //give thank you message after form submit

    return (submitted ? (
        <div className="className='mx-auto w-full rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-10 md:px-12 md:py-12 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-[#A9FD00]">
                Thank You!
            </h2>

            <p className="mt-4 text-white/70">
                Thank you for contacting us. We’ll get back to you soon.
            </p>
        </div>
    ) : (
        <div className='mx-auto w-full max-w-3xl rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-10 md:px-12 md:py-12'>
            <form
                onSubmit={handleSubmit}
            >
                {currentStep == 0 && (
                    <NameStep
                        error={emptyError === "name"}
                        value={formData.name}
                        onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
                    />
                )}

                {currentStep == 1 && (
                    <EmailStep
                        error={emptyError === "email"}
                        value={formData.email}
                        onChange={(value) => {
                            setEmptyError("")
                            setFormData((prev) => ({ ...prev, email: value }))
                        }}
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
                        onChange={(value) => setFormData((prev) => ({ ...prev, answerTwo: value }))}
                    />
                )}

                {/* navigation buttons */}
                <NavigateButton
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    showPrevious={currentStep > 0}
                    isLastStep={currentStep === 3 && formData.answerTwo}
                />
            </form>
        </div>
    )
    )
}

export default ContactForm