-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT,
    "name" TEXT NOT NULL,
    "desc" TEXT,
    "coverUrl" TEXT,
    "icon" TEXT,
    "order" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "parentId" INTEGER,
    CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Category" ("coverUrl", "createdAt", "desc", "icon", "id", "key", "name", "order", "updatedAt") SELECT "coverUrl", "createdAt", "desc", "icon", "id", "key", "name", "order", "updatedAt" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE UNIQUE INDEX "Category_key_key" ON "Category"("key");
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
CREATE UNIQUE INDEX "Category_order_key" ON "Category"("order");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
