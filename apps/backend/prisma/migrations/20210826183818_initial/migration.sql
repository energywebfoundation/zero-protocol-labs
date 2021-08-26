-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" BYTEA NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "File.createdAt_index" ON "File"("createdAt");
