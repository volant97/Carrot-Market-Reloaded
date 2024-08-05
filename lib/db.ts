import { UsersIcon } from "@heroicons/react/16/solid";
import { PrismaClient } from "@prisma/client";
import { contains } from "validator";

const db = new PrismaClient();

async function test() {
  const users = await db.user.findMany({
    where: {
      username: {
        contains: "est",
      },
    },
  });
  console.log(users);
}

test();

export default db;
