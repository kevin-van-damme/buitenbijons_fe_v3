"use server";
interface RegisterFormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
export async function handleRegisterFormSubmit(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!email || !username || !password || !confirmPassword) {
    return { success: false, error: "Please fill in all required fields." };
  }
  if (password !== confirmPassword) {
    return { success: false, error: "Passwords do not match." };
  }
  if (!email.includes("@")) {
    return { success: false, error: "Invalid email address." };
  }
  //nog backend logica toegevoegen om te checkn of users bestaan...
  return { success: true };
}
