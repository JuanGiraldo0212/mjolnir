import { hashPassword } from "@/lib/utils";
import { createUser, findUserByEmail } from "@/app/api/db";

export async function POST(req: Request) {
  const {
    email,
    password,
    firstName,
    lastName,
    birthDate,
    gender,
    weight,
    height,
    measurementUnit,
    exerciseWeightUnit,
  } = await req.json();

  if (
    !email ||
    !password ||
    password.length < 8 ||
    !firstName ||
    !lastName ||
    !birthDate ||
    !gender ||
    weight == null ||
    height == null ||
    !measurementUnit ||
    !exerciseWeightUnit
  ) {
    return new Response(
      JSON.stringify({ message: "Missing or invalid input fields" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser)
    return new Response(JSON.stringify({ message: "User already exists" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });

  const numericWeight = Number(weight);
  const numericHeight = Number(height);

  if (isNaN(numericWeight) || isNaN(numericHeight)) {
    return new Response(
      JSON.stringify({ message: "Height and weight must be valid numbers" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const hashedPassword = await hashPassword(password);
    await createUser(
      email,
      hashedPassword,
      firstName,
      lastName,
      birthDate,
      gender,
      numericWeight,
      numericHeight,
      measurementUnit,
      exerciseWeightUnit
    );
    return new Response(JSON.stringify({ message: "User created" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error creating user." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
