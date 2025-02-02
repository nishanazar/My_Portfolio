"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea" // Assuming you have a Textarea component for the message input
import { client } from "@/sanity/lib/client"

// Define form validation schema with Zod
const formSchema = z.object({
  firstName: z.string().min(2, "First name is required").max(50),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"), // Add message validation
})

const ContactForm = () => {
  type formType = z.infer<typeof formSchema>

  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
  })

  // Function to handle form submission
  async function onSubmit(values: formType) {
    // Insert data into Sanity
    await client.create({
      _type: "contactForm",
      name: values.firstName,
      email: values.email,
      message: values.message, // Store the message field too
    })

    // Log form values for testing
    console.log(values)
  }

  return (
    <section id="contact" className="bg-gray-100 py-16 text-center">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Contact Me</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* First Name Field */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-left">First Name</FormLabel> */}
                  <FormControl>
                    <Input
                      className="w-full p-6 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                      placeholder="Your First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-left">Email</FormLabel> */}
                  <FormControl>
                    <Input
                      className="w-full p-6 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel className="text-left">Message</FormLabel> */}
                  <FormControl>
                    <Textarea
                      className="w-full p-6 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}

export default ContactForm
