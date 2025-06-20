"use server";

import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});
export type ContactFormState = {
  success: boolean;
  message: string;
};
export async function handleContactSubmit(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  const result = ContactFormSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
    };
  }
  console.log("Contact Form Submitted:", result.data);

  return {
    success: true,
    message: "Your message has been sent successfully!",
  };
}
