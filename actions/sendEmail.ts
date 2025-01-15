'use server'

import { getErrorMessage, validateString } from '@/lib/utils'
import { Resend } from 'resend'
import ContactFormEmail from '@/email/contact-form-email'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid senderEmail',
    }
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    }
  }

  let data

  try {
    const response = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'arthur.kamenitchualeu@gmail.com',
      subject: 'New message from contact form',
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    })

    if (!response.data?.id) {
      return {
        error: 'Failed to send email',
      }
    }
  } catch (error: unknown) {
    console.log(error)
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data,
  }
}
