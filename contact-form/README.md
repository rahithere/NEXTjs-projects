# Contact Form

A modern, multi-step contact form built with Next.js, React, Tailwind CSS, and Nodemailer.

## Overview

This project is a responsive multi-step contact form designed to collect and qualify business inquiries.

The form guides users through a series of questions, validates their input on the client side, submits the data to a Next.js API route, and sends the submission to an email inbox using Nodemailer.

## Features

- Multi-step contact form
- Name and email collection
- Email format validation
- Radio-based business qualification questions
- Previous and Next navigation
- Field-specific validation and error states
- Loading state during submission
- Server-side form handling
- Server-side eligibility calculation
- Email notifications using Nodemailer
- Thank-you state after successful submission
- Responsive UI

## Tech Stack

- **Next.js**
- **React**
- **Tailwind CSS**
- **Nodemailer**
- **JavaScript**

## Form Flow

```text
Name
  ↓
Email
  ↓
Business Age
  ↓
Monthly Recurring Revenue
  ↓
Submit
  ↓
Next.js API Route
  ↓
Server-side Validation
  ↓
Eligibility Check
  ↓
Nodemailer
  ↓
Email Notification
  ↓
Thank You
```
