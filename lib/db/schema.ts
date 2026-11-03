import { pgTable, text, timestamp, uuid, integer, boolean, varchar, pgEnum } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("user_role", ["guest", "student", "jury", "admin"]);
export const competitionStatusEnum = pgEnum("competition_status", [
  "draft",
  "upcoming",
  "active",
  "evaluation",
  "completed",
]);

// 1. User Profiles & RBAC
export const userProfiles = pgTable("user_profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull().unique(), // maps to Neon Auth neon_auth.user.id
  displayName: varchar("display_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  role: roleEnum("role").default("student").notNull(),
  institution: varchar("institution", { length: 255 }),
  yearOfStudy: varchar("year_of_study", { length: 50 }),
  portfolioBio: text("portfolio_bio"),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// 2. Architectural Competitions
export const competitions = pgTable("competitions", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  brief: text("brief").notNull(),
  description: text("description").notNull(),
  status: competitionStatusEnum("status").default("active").notNull(),
  earlyBirdDeadline: timestamp("early_bird_deadline", { withTimezone: true }).notNull(),
  standardDeadline: timestamp("standard_deadline", { withTimezone: true }).notNull(),
  lateDeadline: timestamp("late_deadline", { withTimezone: true }).notNull(),
  submissionDeadline: timestamp("submission_deadline", { withTimezone: true }).notNull(),
  juryRevealDate: timestamp("jury_reveal_date", { withTimezone: true }).notNull(),
  resultDeclarationDate: timestamp("result_declaration_date", { withTimezone: true }).notNull(),
  earlyFeeInr: integer("early_fee_inr").notNull(),
  standardFeeInr: integer("standard_fee_inr").notNull(),
  lateFeeInr: integer("late_fee_inr").notNull(),
  firstPrize: varchar("first_prize", { length: 100 }).notNull(),
  secondPrize: varchar("second_prize", { length: 100 }).notNull(),
  thirdPrize: varchar("third_prize", { length: 100 }).notNull(),
  honorableMentions: varchar("honorable_mentions", { length: 100 }).notNull(),
  bannerImageUrl: text("banner_image_url").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// 3. Competition Registrations
export const competitionRegistrations = pgTable("competition_registrations", {
  id: uuid("id").defaultRandom().primaryKey(),
  competitionId: uuid("competition_id").references(() => competitions.id).notNull(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  teamName: varchar("team_name", { length: 255 }).notNull(),
  teamMembers: text("team_members").notNull(),
  registrationCode: varchar("registration_code", { length: 100 }).notNull().unique(),
  paymentStatus: varchar("payment_status", { length: 50 }).default("completed").notNull(),
  paymentAmount: integer("payment_amount").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// 3B. Direct Participant Registrations (Fast Geolocation Registration without Fee Structure)
export const participantRegistrations = pgTable("participant_registrations", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  dob: varchar("dob", { length: 50 }).notNull(),
  college: varchar("college", { length: 500 }).notNull(),
  address: text("address").notNull(),
  country: varchar("country", { length: 100 }).notNull(),
  lat: varchar("lat", { length: 50 }),
  lng: varchar("lng", { length: 50 }),
  phone: varchar("phone", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  competitionId: varchar("competition_id", { length: 100 }).default("comp-arch-2026"),
  registrationCode: varchar("registration_code", { length: 100 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// 4. Competition Submissions (A2 PDF format)
export const competitionSubmissions = pgTable("competition_submissions", {
  id: uuid("id").defaultRandom().primaryKey(),
  registrationId: uuid("registration_id").references(() => competitionRegistrations.id).notNull(),
  competitionId: uuid("competition_id").references(() => competitions.id).notNull(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  projectTitle: varchar("project_title", { length: 255 }).notNull(),
  designStatement: text("design_statement").notNull(),
  sheet1PlansUrl: text("sheet_1_plans_url").notNull(),
  sheet2ElevationsUrl: text("sheet_2_elevations_url").notNull(),
  sheet3SectionsUrl: text("sheet_3_sections_url").notNull(),
  consolidatedPdfUrl: text("consolidated_pdf_url").notNull(),
  anonymousJuryCode: varchar("anonymous_jury_code", { length: 100 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// 5. Jury Evaluations (Anonymized)
export const juryEvaluations = pgTable("jury_evaluations", {
  id: uuid("id").defaultRandom().primaryKey(),
  submissionId: uuid("submission_id").references(() => competitionSubmissions.id).notNull(),
  juryUserId: varchar("jury_user_id", { length: 255 }).notNull(),
  conceptScore: integer("concept_score").notNull(),
  sustainabilityScore: integer("sustainability_score").notNull(),
  functionalityScore: integer("functionality_score").notNull(),
  technicalScore: integer("technical_score").notNull(),
  totalScore: integer("total_score").notNull(),
  critique: text("critique").notNull(),
  evaluatedAt: timestamp("evaluated_at", { withTimezone: true }).defaultNow().notNull(),
});

// 6. Quizzes
export const quizzes = pgTable("quizzes", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  category: varchar("category", { length: 100 }).notNull(),
  difficulty: varchar("difficulty", { length: 50 }).notNull(),
  durationMinutes: integer("duration_minutes").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  passingScore: integer("passing_score").default(60).notNull(),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const quizQuestions = pgTable("quiz_questions", {
  id: uuid("id").defaultRandom().primaryKey(),
  quizId: uuid("quiz_id").references(() => quizzes.id).notNull(),
  questionText: text("question_text").notNull(),
  questionType: varchar("question_type", { length: 50 }).default("multiple_choice").notNull(),
  optionsJson: text("options_json").notNull(), // JSON string array of options
  correctOptionIndex: integer("correct_option_index").notNull(),
  explanation: text("explanation").notNull(),
  orderIndex: integer("order_index").notNull(),
});

export const quizAttempts = pgTable("quiz_attempts", {
  id: uuid("id").defaultRandom().primaryKey(),
  quizId: uuid("quiz_id").references(() => quizzes.id).notNull(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  passed: boolean("passed").notNull(),
  startedAt: timestamp("started_at", { withTimezone: true }).defaultNow().notNull(),
  completedAt: timestamp("completed_at", { withTimezone: true }).defaultNow().notNull(),
});

// 7. Distance Learning Courses
export const courses = pgTable("courses", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  instructor: varchar("instructor", { length: 255 }).notNull(),
  level: varchar("level", { length: 50 }).notNull(),
  durationHours: integer("duration_hours").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  description: text("description").notNull(),
  thumbnailUrl: text("thumbnail_url").notNull(),
  certificateAvailable: boolean("certificate_available").default(true).notNull(),
  published: boolean("published").default(true).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const courseLessons = pgTable("course_lessons", {
  id: uuid("id").defaultRandom().primaryKey(),
  courseId: uuid("course_id").references(() => courses.id).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  durationMinutes: integer("duration_minutes").notNull(),
  videoUrl: text("video_url").notNull(),
  orderIndex: integer("order_index").notNull(),
  contentMarkdown: text("content_markdown").notNull(),
});

export const courseEnrollments = pgTable("course_enrollments", {
  id: uuid("id").defaultRandom().primaryKey(),
  courseId: uuid("course_id").references(() => courses.id).notNull(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  progressPercentage: integer("progress_percentage").default(0).notNull(),
  completed: boolean("completed").default(false).notNull(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// 8. Guest Lectures
export const guestLectures = pgTable("guest_lectures", {
  id: uuid("id").defaultRandom().primaryKey(),
  speakerName: varchar("speaker_name", { length: 255 }).notNull(),
  speakerTitle: varchar("speaker_title", { length: 255 }).notNull(),
  speakerBio: text("speaker_bio").notNull(),
  speakerAvatar: text("speaker_avatar").notNull(),
  topic: varchar("topic", { length: 255 }).notNull(),
  scheduledAt: timestamp("scheduled_at", { withTimezone: true }).notNull(),
  durationMinutes: integer("duration_minutes").notNull(),
  recordingUrl: text("recording_url"),
  isLive: boolean("is_live").default(false).notNull(),
  isUpcoming: boolean("is_upcoming").default(true).notNull(),
});

// 9. Community Social Interface
export const communityPosts = pgTable("community_posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  authorName: varchar("author_name", { length: 255 }).notNull(),
  authorInstitution: varchar("author_institution", { length: 255 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  imageUrl: text("image_url").notNull(),
  model3dUrl: text("model_3d_url"),
  likesCount: integer("likes_count").default(0).notNull(),
  commentsCount: integer("comments_count").default(0).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const postComments = pgTable("post_comments", {
  id: uuid("id").defaultRandom().primaryKey(),
  postId: uuid("post_id").references(() => communityPosts.id).notNull(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  authorName: varchar("author_name", { length: 255 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// 10. Contact Inquiries
export const contactMessages = pgTable("contact_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: text("message").notNull(),
  status: varchar("status", { length: 50 }).default("received").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
