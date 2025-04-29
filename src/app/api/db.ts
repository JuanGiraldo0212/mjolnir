import { PrismaClient } from "../../../generated/prisma/client";

const prisma = new PrismaClient();

export const createUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  birthDate: Date,
  gender: string,
  height: number,
  weight: number,
  measurementUnit: string,
  exerciseWeightUnit: string
) => {
  try {
    await prisma.user.create({
      data: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        gender: gender,
        height: height,
        weight: weight,
        measurementUnit: measurementUnit,
        exerciseWeightUnit: exerciseWeightUnit,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email: email } });
  return user;
};
