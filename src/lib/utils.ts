import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { hash, compare } from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hashPassword = async (password: string) =>
  await hash(password, 12);

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => await compare(password, hashedPassword);
