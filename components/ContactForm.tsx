"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(), // Phone number field is optional
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
   mode: "onBlur",
   defaultValues: {
    email: "",
    message: "",
    name: "",
    phone: "",
   },
  });

  const sendEmail = async (data: ContactFormData) => {
    try {
      await emailjs.send("service_xxx", "template_xxx", data, "user_xxx");
      alert("Email sent successfully!");
      reset(); 
    } catch (err) {
      console.error(err);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <section
      className="flex items-center justify-center h-screen mt-6 bg-cover bg-center rounded-md"
      style={{ backgroundImage: "url('/images/hero-about.png')" }}
      data-aos="fade-up"
    >
      {/* Right Side - Contact Form */}
      <div className="bg-slate-900 bg-opacity-80 shadow-lg rounded-lg p-10 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Contact Us
        </h2>

        {/* Small Write-Up */}
        <div className="mb-6 text-center text-gray-800">
          <p className="text-lg text-white text-[13px]">
            Feel free to get in touch with us for any inquiries. We&apos;ll be
            glad to give you feedback and assist with any questions you may
            have.
          </p>
        </div>

        <form onSubmit={handleSubmit(sendEmail)} className="space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              className="w-full p-3 border rounded outline-none"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="w-full p-3 border rounded outline-none"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Number Input */}
          <div>
            <input
              type="text"
              {...register("phone")}
              placeholder="Phone (Optional)"
              className="w-full p-3 border rounded outline-none"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Message Input */}
          <div>
            <textarea
              {...register("message")}
              placeholder="Message"
              className="w-full p-3 border rounded h-32 outline-none"
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-white p-3 w-full rounded hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
