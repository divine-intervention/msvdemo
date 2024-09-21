"use client"
import { Button, Input } from "@/components/ui"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import React from "react"

export const ContactForm = () => {
  return (
    <section className="py-14">
      <div className="">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex-1 space-y-4 lg:py-16">
            <p className="text-4xl font-medium !leading-[1.3] text-gray-800 sm:text-6xl">
              Let us know what you think!{" "}
            </p>
            <p className="text-sm text-muted-foreground">
              We’re here to help and answer any question you might have, We look
              forward to hearing from you! Please fill out the form, or us the
              contact information bellow .
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <Input
                type="text"
                placeholder="Name"
                required
                className="h-12 bg-background"
              />

              <Input
                type="email"
                placeholder="Email"
                required
                className="h-12 bg-background"
              />

              <Input
                type="text"
                placeholder="Company Name"
                required
                className="h-12 bg-background"
              />

              <Textarea
                placeholder="Enter Your Message"
                required
                className="min-h-24 bg-background"
              />
              <Select>
                <SelectTrigger className="h-12 bg-background text-foreground">
                  <SelectValue
                    className="[&span]:text-muted-foreground"
                    placeholder="How did you hear about us?"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="friends">Friends</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>
              <Button size={"lg"} className="w-full">
                Submit
              </Button>
            </form>
          </div>
          <div className="space-y-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7566951117224!2d151.20438337626294!3d-33.870160719130176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f216d52b7%3A0xaa4742657bf6460b!2sGeorge%20St%2C%20Sydney%20NSW%2C%20Australia!5e0!3m2!1sen!2snp!4v1724690699449!5m2!1sen!2snp"
              className="h-full min-h-96 w-full rounded-2xl border-none"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
