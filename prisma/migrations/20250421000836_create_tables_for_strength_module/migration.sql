/*
  Warnings:

  - Added the required column `birthDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bodyWeightUnit` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exerciseWeightUnit` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Exercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "iconPath" TEXT NOT NULL,
    "muscleGroup" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserExercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "currSets" INTEGER NOT NULL,
    "currReps" INTEGER NOT NULL,
    "currWeight" REAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserExercise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Protocol" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Protocol_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProtocolDay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "recurrent" BOOLEAN NOT NULL,
    "protocolId" INTEGER NOT NULL,
    CONSTRAINT "ProtocolDay_protocolId_fkey" FOREIGN KEY ("protocolId") REFERENCES "Protocol" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" DATETIME NOT NULL,
    "protocolDayId" INTEGER NOT NULL,
    CONSTRAINT "Workout_protocolDayId_fkey" FOREIGN KEY ("protocolDayId") REFERENCES "ProtocolDay" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExerciseRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reps" INTEGER NOT NULL,
    "set" INTEGER NOT NULL,
    "weight" REAL NOT NULL,
    "workoutId" INTEGER NOT NULL,
    "userExerciseId" INTEGER NOT NULL,
    CONSTRAINT "ExerciseRecord_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExerciseRecord_userExerciseId_fkey" FOREIGN KEY ("userExerciseId") REFERENCES "UserExercise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProtocolDayUserExercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userExerciseId" INTEGER NOT NULL,
    "protocolDayId" INTEGER NOT NULL,
    CONSTRAINT "ProtocolDayUserExercise_userExerciseId_fkey" FOREIGN KEY ("userExerciseId") REFERENCES "UserExercise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProtocolDayUserExercise_protocolDayId_fkey" FOREIGN KEY ("protocolDayId") REFERENCES "ProtocolDay" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "birthDate" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "weight" REAL NOT NULL,
    "height" REAL NOT NULL,
    "password" TEXT NOT NULL,
    "bodyWeightUnit" TEXT NOT NULL,
    "exerciseWeightUnit" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "firstName", "id", "lastName") SELECT "email", "firstName", "id", "lastName" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
