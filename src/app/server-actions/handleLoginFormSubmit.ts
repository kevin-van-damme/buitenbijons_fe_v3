"use server";

interface LoginFormData {
  username: string;
  password: string;
}

export async function handleLoginFormSubmit(prevState: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { success: false, error: "Please fill in both fields." };
  }
  if (username !== "admin" || password !== "password123") {
    return { success: false, error: "Invalid username or password." };
  }
  return { success: true };
}
