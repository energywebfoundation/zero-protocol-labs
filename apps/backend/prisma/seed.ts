import { PrismaClient } from '@prisma/client';

const base64Image = 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=';

const prisma = new PrismaClient();

async function main() {
  const imageFile = await prisma.file.create({
    data: {
      id: "2f948f9d-166d-4b36-874e-f8dd668d4c40",
      fileName: 'test.png',
      mimeType: 'image/png',
      content: Buffer.from(base64Image, 'base64')
    }
  })

  const certificate = await prisma.certificate.create({
    data: {
      id: "973d48bb-15da-4eaf-8040-b6cb66e22023",
      generatorName: "Solar 1 - Non Bua Lampon",
      generatorId: "NA",
      country: "China",
      energySource: "Wind",
      generationStart: "2020-11-01T00:00:00.000Z",
      generationEnd: "2021-06-01T23:59:59.999Z"
    }
  })

  const buyer = await prisma.buyer.create({
    data: {
      id: "29e25d61-103a-4710-b03d-ee12df765066",
      name: "-"
    }
  })

  await prisma.filecoinNode.create({ data: { id: "f0112027", buyerId: buyer.id } })
  await prisma.filecoinNode.create({ data: { id: "f123242", buyerId: buyer.id } })
  await prisma.filecoinNode.create({ data: { id: "f5435435", buyerId: buyer.id } })
  await prisma.filecoinNode.create({ data: { id: "f3413434", buyerId: buyer.id } })
  await prisma.filecoinNode.create({ data: { id: "f5667899", buyerId: buyer.id } })

  const seller = await prisma.seller.create({
    data: {
      id: "68926364-a0ba-4160-b3ea-1ee70c2690dd",
      name: "Monsoon Carbon",
      address: "Mt Arrakis 42, Dune plains, \nAix en Provence, 12345, France",
      contactPerson: "Paul Atreides"
    }
  })

  const purchase = await prisma.purchase.create({
    data: {
      id: "04a7155d-ced1-4981-8660-48670a0735dd",
      certificateId: certificate.id,
      buyerId: buyer.id,
      sellerId: seller.id,
      recsSold: 3,
      recsTransactions: [
        {year: 2020, amount: 2},
        {year: 2021, amount: 1},
      ]
    }
  });

  await prisma.file.update({
    where: {id: imageFile.id},
    data: {
      purchaseId: purchase.id
    }
  })
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
