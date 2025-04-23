-- CreateTable
CREATE TABLE "WeightRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" REAL NOT NULL,
    "smooth" REAL NOT NULL,
    "weightProgramId" INTEGER NOT NULL,
    CONSTRAINT "WeightRecord_weightProgramId_fkey" FOREIGN KEY ("weightProgramId") REFERENCES "WeightProgram" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WeightProgram" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL,
    "goalWeight" REAL NOT NULL,
    "mode" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "WeightProgram_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
