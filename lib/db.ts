import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  const token = await db.sMSToken.create({
    data: {
      token: "121212",
      user: {
        connect: {
          id: 4,
        },
      },
    },
  });
}
test();

export default db;
