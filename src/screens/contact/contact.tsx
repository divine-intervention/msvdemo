"use client"
import React from "react"
import { ContactForm } from "./components/contact-form"
import { Cta, Newsletter } from "../home/_components"

export const Contact = () => {
  return (
    <div className="space-y-20">
      <ContactForm />
      <Cta />
      <Newsletter />
    </div>
  )
}
