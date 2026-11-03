# API Architecture & Endpoints — The ArchEd

## 1. Overview
All business capabilities are exposed through versioned RESTful APIs under `/api/v1/*` to support the web platform and future native iOS and Android applications.

## 2. API Endpoints Catalog

### Authentication
- `GET/POST /api/auth/[...path]`: Managed Better Auth route handler (sign-in, sign-up, sign-out, session, social OAuth).
- `GET /api/v1/user/profile`: Fetch current user's profile and active role.
- `PUT /api/v1/user/profile`: Update personal architectural portfolio bio and academic year.

### Competitions
- `GET /api/v1/competitions`: List active, upcoming, and past competitions with prize structures and deadlines.
- `GET /api/v1/competitions/:slug`: Retrieve full brief, schedule, and submission guidelines.
- `POST /api/v1/competitions/:id/register`: Register for a competition, generating an entry tracking code.
- `POST /api/v1/competitions/:id/submit`: Upload and record A2 architectural drawings (Plans, Elevations, Sections) and softcopy PDF.

### Jury & Evaluation
- `GET /api/v1/jury/competitions`: List assigned competitions for the authenticated jury evaluator.
- `GET /api/v1/jury/submissions/:id`: Retrieve anonymized submission and high-res drawing PDFs.
- `POST /api/v1/jury/submissions/:id/evaluate`: Submit criteria scores (1-10) and critique.

### Quizzes & Assessment
- `GET /api/v1/quizzes`: List available architectural quizzes categorized by difficulty.
- `GET /api/v1/quizzes/:id`: Retrieve quiz questions (omitting correct answers).
- `POST /api/v1/quizzes/:id/submit`: Grade responses on the server, compute score, and record attempt.
- `GET /api/v1/quizzes/:id/leaderboard`: Real-time quiz leaderboard.

### Courses & Guest Lectures
- `GET /api/v1/courses`: Search and filter courses catalog.
- `GET /api/v1/courses/:slug`: Course syllabus, video modules, and supplementary reading.
- `POST /api/v1/courses/:id/enroll`: Enroll student into a course.
- `GET /api/v1/guest-lectures`: Directory of visiting architects, bios, and scheduled webinars.

### Social Interface & Portfolio
- `GET /api/v1/social/posts`: Feed of architectural designs, projects, and critiques.
- `POST /api/v1/social/posts`: Publish project portfolio update.
- `POST /api/v1/social/posts/:id/like`: Toggle like reaction.
- `POST /api/v1/social/posts/:id/comments`: Post architectural review or peer critique.

### Contact
- `POST /api/v1/contact`: Submit contact inquiries with instant validation.
