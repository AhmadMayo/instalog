import type { Action, User, Event } from "@prisma/client";
import { PrismaClient } from "@prisma/client/index.js";
import { v4 as uuidv4 } from "uuid";

const actions = {
  login: {
    id: uuidv4(),
    name: "user.login_succeeded",
  },
  search: {
    id: uuidv4(),
    name: "user.searched_activity_log_events",
  },
  incident: {
    id: uuidv4(),
    name: "incident.create_succeeded",
  },
  invite: {
    id: uuidv4(),
    name: "user.invited_teammate",
  },
} satisfies Record<string, Action>;
const users = {
  ahmed: {
    id: uuidv4(),
    name: "Ahmed Abdel-Aziz",
    email: "ahmedsabdelaziz@gmail.com",
  },
  mohsen: {
    id: uuidv4(),
    name: "Mohsen Ateya",
    email: "m.ateya@gmail.com",
  },
  hanaa: {
    id: uuidv4(),
    name: "Hanaa ElSherbeeny",
    email: "hanaa1988@gmail.com",
  },
} satisfies Record<string, User>;
const events = [
  {
    id: uuidv4(),
    location: "101.12.33.7",
    occurred_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    metadata: {},
    action_id: actions.login.id,
    actor_id: users.ahmed.id,
    target_id: null,
  },
  {
    id: uuidv4(),
    location: "101.12.33.7",
    occurred_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    metadata: {},
    action_id: actions.invite.id,
    actor_id: users.ahmed.id,
    target_id: users.mohsen.id,
  },
  {
    id: uuidv4(),
    location: "101.12.33.7",
    occurred_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    metadata: {},
    action_id: actions.invite.id,
    actor_id: users.ahmed.id,
    target_id: users.hanaa.id,
  },
  {
    id: uuidv4(),
    location: "101.12.33.6",
    occurred_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    metadata: {},
    action_id: actions.login.id,
    actor_id: users.mohsen.id,
    target_id: null,
  },
  {
    id: uuidv4(),
    location: "101.12.33.6",
    occurred_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    metadata: {},
    action_id: actions.incident.id,
    actor_id: users.mohsen.id,
    target_id: null,
  },
  {
    id: uuidv4(),
    location: "101.12.33.6",
    occurred_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    metadata: {},
    action_id: actions.incident.id,
    actor_id: users.mohsen.id,
    target_id: null,
  },
  {
    id: uuidv4(),
    location: "101.12.33.6",
    occurred_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    metadata: {},
    action_id: actions.incident.id,
    actor_id: users.mohsen.id,
    target_id: null,
  },
  {
    id: uuidv4(),
    location: "101.12.33.12",
    occurred_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    metadata: {},
    action_id: actions.login.id,
    actor_id: users.hanaa.id,
    target_id: null,
  },
  {
    id: uuidv4(),
    location: "101.12.33.12",
    occurred_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    metadata: {
      search: "incident.create",
    },
    action_id: actions.search.id,
    actor_id: users.hanaa.id,
    target_id: null,
  },
] satisfies Event[];

const prisma = new PrismaClient();
async function main() {
  await prisma.action.createMany({
    data: Object.values(actions),
  });

  await prisma.user.createMany({
    data: Object.values(users),
  });

  await prisma.event.createMany({
    data: events,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
