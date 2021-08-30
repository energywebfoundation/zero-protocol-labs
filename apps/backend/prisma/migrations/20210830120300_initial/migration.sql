-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" BYTEA NOT NULL,
    "purchaseId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buyer" (
    "filecoinMinerId" TEXT NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("filecoinMinerId")
);

-- CreateTable
CREATE TABLE "Seller" (
    "irecId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,

    PRIMARY KEY ("irecId")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL,
    "generatorName" TEXT NOT NULL,
    "generatorId" TEXT NOT NULL,
    "namePlateCapacity" TEXT NOT NULL,
    "namePlateCapacityUnit" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "generationStart" TIMESTAMP(3) NOT NULL,
    "generationEnd" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "certificateId" TEXT NOT NULL,
    "buyerFilecoinMinerId" TEXT,
    "sellerIrecId" TEXT,
    "recsSold" INTEGER NOT NULL,
    "recsTransactions" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "File.createdAt_index" ON "File"("createdAt");

-- AddForeignKey
ALTER TABLE "File" ADD FOREIGN KEY ("purchaseId") REFERENCES "Purchase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD FOREIGN KEY ("buyerFilecoinMinerId") REFERENCES "Buyer"("filecoinMinerId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD FOREIGN KEY ("sellerIrecId") REFERENCES "Seller"("irecId") ON DELETE SET NULL ON UPDATE CASCADE;
