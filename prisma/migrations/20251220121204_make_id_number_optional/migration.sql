-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "idNumber" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "yearOfStudy" TEXT NOT NULL,
    "nsfasStatus" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Application" ("course", "createdAt", "email", "id", "idNumber", "name", "nsfasStatus", "phone", "roomType", "status", "yearOfStudy") SELECT "course", "createdAt", "email", "id", "idNumber", "name", "nsfasStatus", "phone", "roomType", "status", "yearOfStudy" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
