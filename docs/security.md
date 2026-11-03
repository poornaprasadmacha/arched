# Security & Data Governance — The ArchEd

## 1. Zero-Trust Access Model
- **Server-Side Authorization**: Every API mutation and sensitive read verifies identity against `auth.getSession()`. UI element visibility is strictly a convenience layer, never a security boundary.
- **Anonymized Jury Reviews**: Student submissions are masked behind randomized anonymous evaluation tokens until official results publication.
- **Student Data Isolation**: Students may only read and edit their own drafts, attempts, and portfolio items.

## 2. File Upload Validation (Architectural Drawings)
- A2-sized architectural drawings submitted via the Competition Registration gateway undergo strict validation:
  - Allowed MIME types: `application/pdf`.
  - Max file size: 50MB per sheet.
  - Virus and extension spoofing checks.
- Binary assets are streamed directly to object storage; no heavy binary BLOBs are stored in PostgreSQL.

## 3. Privacy Compliance (DPDP Act & GDPR)
- Clear cookie and telemetry disclosures on `/privacy_policy.html`.
- Student rights to data export and deletion supported via administrative endpoints.
