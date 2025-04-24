/*
  Warnings:

  - You are about to drop the column `bodyWeightUnit` on the `User` table. All the data in the column will be lost.
  - Added the required column `measurementUnit` to the `User` table without a default value. This is not possible if the table is not empty.

*/
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
    "measurementUnit" TEXT NOT NULL,
    "exerciseWeightUnit" TEXT NOT NULL
);
INSERT INTO "new_User" ("birthDate", "email", "exerciseWeightUnit", "firstName", "gender", "height", "id", "lastName", "password", "weight") SELECT "birthDate", "email", "exerciseWeightUnit", "firstName", "gender", "height", "id", "lastName", "password", "weight" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
