import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { hash } from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hashPassword = async (password: string) =>
  await hash(password, 12);
