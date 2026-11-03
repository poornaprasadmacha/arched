import { INITIAL_PARTICIPANTS, ParticipantRegistrationItem } from "./initial-data";
import { db, schema } from "@/lib/db";
import { eq } from "drizzle-orm";

// Live participant store backed by PostgreSQL / memory (No dummy seed data)
let globalRegistrations: ParticipantRegistrationItem[] = [];

export function calculateAge(dobString: string): number {
  if (!dobString) return 21;
  const birthDate = new Date(dobString);
  if (isNaN(birthDate.getTime())) return 21;
  const diff = Date.now() - birthDate.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export async function getRegistrations() {
  // If PostgreSQL is live and connected, attempt to fetch from DB
  if (db && schema.participantRegistrations) {
    try {
      const rows = await db.select().from(schema.participantRegistrations);
      if (rows && rows.length > 0) {
        return rows.map((r) => ({
          id: r.id,
          fullName: r.fullName,
          dob: r.dob,
          college: r.college,
          address: r.address,
          country: r.country,
          lat: r.lat ? parseFloat(r.lat) : 0,
          lng: r.lng ? parseFloat(r.lng) : 0,
          phone: r.phone,
          email: r.email,
          competitionId: r.competitionId || "comp-1",
          registrationCode: r.registrationCode,
          createdAt: r.createdAt ? r.createdAt.toISOString() : new Date().toISOString(),
        }));
      }
    } catch (e) {
      console.warn("Postgres query fallback to in-memory store:", e);
    }
  }
  return [...globalRegistrations];
}

export async function addRegistration(item: Omit<ParticipantRegistrationItem, "id" | "registrationCode" | "createdAt">) {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const registrationCode = `ARCH-2026-${randomSuffix}`;
  const id = `part-${Date.now()}`;
  const createdAt = new Date().toISOString();

  const newEntry: ParticipantRegistrationItem = {
    ...item,
    id,
    registrationCode,
    createdAt,
  };

  // Prepend to in-memory list
  globalRegistrations.unshift(newEntry);

  // If PostgreSQL is live, insert row
  if (db && schema.participantRegistrations) {
    try {
      await db.insert(schema.participantRegistrations).values({
        fullName: item.fullName,
        dob: item.dob,
        college: item.college,
        address: item.address,
        country: item.country,
        lat: item.lat ? item.lat.toString() : null,
        lng: item.lng ? item.lng.toString() : null,
        phone: item.phone,
        email: item.email,
        competitionId: item.competitionId || "comp-1",
        registrationCode,
      });
    } catch (e) {
      console.warn("Could not insert into Postgres table, kept in memory store:", e);
    }
  }

  return newEntry;
}

export async function deleteRegistration(id: string) {
  globalRegistrations = globalRegistrations.filter((r) => r.id !== id);

  if (db && schema.participantRegistrations) {
    try {
      await db.delete(schema.participantRegistrations).where(eq(schema.participantRegistrations.id, id));
    } catch (e) {
      console.warn("Could not delete from Postgres table:", e);
    }
  }
  return true;
}

export function computeStats(registrations: ParticipantRegistrationItem[]) {
  const ages: Record<string, number> = {
    "Under 18": 0,
    "18-22": 0,
    "23-28": 0,
    "29+": 0,
  };

  const colleges: Record<string, number> = {};

  registrations.forEach((reg) => {
    const age = calculateAge(reg.dob);
    if (age < 18) ages["Under 18"]++;
    else if (age <= 22) ages["18-22"]++;
    else if (age <= 28) ages["23-28"]++;
    else ages["29+"]++;

    if (reg.college && reg.college.trim() !== "") {
      colleges[reg.college] = (colleges[reg.college] || 0) + 1;
    }
  });

  const collegeList = Object.keys(colleges)
    .map((name) => ({ name, count: colleges[name] }))
    .sort((a, b) => b.count - a.count);

  return {
    totalCount: registrations.length,
    ages,
    colleges: collegeList,
  };
}
