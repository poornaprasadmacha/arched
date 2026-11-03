$baseUrl = "http://localhost:3000"

$endpoints = @(
    "/",
    "/index.html",
    "/about.html",
    "/about",
    "/what-we-do.html",
    "/what-we-do",
    "/contact.html",
    "/contact",
    "/competition.html",
    "/competition",
    "/compitition/register.php",
    "/competition/register",
    "/quizzes.html",
    "/quizzes",
    "/metaverse.html",
    "/metaverse",
    "/archiverse",
    "/courses.html",
    "/courses",
    "/guest-lecture.html",
    "/guest-lecture",
    "/guest-lectures",
    "/social-interface.html",
    "/social-interface",
    "/social",
    "/terms.html",
    "/terms",
    "/privacy_policy.html",
    "/privacy-policy",
    "/privacy",
    "/refund_policy.html",
    "/refund-policy",
    "/refund",
    "/dashboard/student",
    "/dashboard/jury",
    "/dashboard/admin",
    "/admin",
    "/auth"
)

$passedCount = 0
$failedCount = 0

Write-Output "================================================="
Write-Output "  THE ARCHED - AUTOMATED INTEGRATION TEST SUITE  "
Write-Output "================================================="

foreach ($ep in $endpoints) {
    try {
        $res = Invoke-WebRequest -Uri "$baseUrl$ep" -UseBasicParsing -TimeoutSec 10
        if ($res.StatusCode -eq 200) {
            Write-Output "[PASS] $ep - HTTP 200 OK (Content Length: $($res.RawContentLength) bytes)"
            $passedCount++
        } else {
            Write-Output "[FAIL] $ep - Unexpected Status: $($res.StatusCode)"
            $failedCount++
        }
    } catch {
        Write-Output "[ERROR] $ep - $_"
        $failedCount++
    }
}

Write-Output ""
Write-Output "--- TESTING API ENDPOINTS ---"

# 1. Test POST /api/v1/contact
try {
    $contactPayload = @{
        name = "Test Architect"
        email = "architect@test.in"
        subject = "Competition Inquiries"
        message = "Testing automated inquiry submission on The ArchEd platform."
    } | ConvertTo-Json

    $contactRes = Invoke-RestMethod -Uri "$baseUrl/api/v1/contact" -Method POST -Body $contactPayload -ContentType "application/json"
    if ($contactRes.success -eq $true) {
        Write-Output "[PASS] POST /api/v1/contact - Response: $($contactRes.message)"
        $passedCount++
    } else {
        Write-Output "[FAIL] POST /api/v1/contact - $($contactRes.error)"
        $failedCount++
    }
} catch {
    Write-Output "[ERROR] POST /api/v1/contact - $_"
    $failedCount++
}

# 2. Test POST /api/v1/competitions/register
try {
    $compPayload = @{
        competitionId = "comp-1"
        leaderName = "Priya Sharma"
        email = "priya@cept.ac.in"
        institution = "CEPT University"
        teamName = "Studio Vernacular"
        projectTitle = "Passive Bamboo Sanitation Canopy"
        designStatement = "Testing architectural registration with A2 landscape drawing validation requirements."
        feeTier = "Early Bird Tier"
        amountPaid = 1200
    } | ConvertTo-Json

    $compRes = Invoke-RestMethod -Uri "$baseUrl/api/v1/competitions/register" -Method POST -Body $compPayload -ContentType "application/json"
    if ($compRes.success -eq $true -and $compRes.registrationCode -match "ARCH-2026") {
        Write-Output "[PASS] POST /api/v1/competitions/register - Code: $($compRes.registrationCode), Anonymous Jury: $($compRes.anonymousJuryCode)"
        $passedCount++
    } else {
        Write-Output "[FAIL] POST /api/v1/competitions/register"
        $failedCount++
    }
} catch {
    Write-Output "[ERROR] POST /api/v1/competitions/register - $_"
    $failedCount++
}

# 3. Test POST /api/v1/quizzes/submit
try {
    $quizPayload = @{
        quizId = "quiz-1"
        answers = @{
            "q1-1" = 1
            "q1-2" = 2
            "q1-3" = 0
            "q1-4" = 1
            "q1-5" = 0
        }
    } | ConvertTo-Json

    $quizRes = Invoke-RestMethod -Uri "$baseUrl/api/v1/quizzes/submit" -Method POST -Body $quizPayload -ContentType "application/json"
    if ($quizRes.success -eq $true -and $quizRes.scorePercentage -eq 100) {
        Write-Output "[PASS] POST /api/v1/quizzes/submit - Score: $($quizRes.scorePercentage)%, Correct: $($quizRes.correctCount)/$($quizRes.totalQuestions), Passed: $($quizRes.passed)"
        $passedCount++
    } else {
        Write-Output "[FAIL] POST /api/v1/quizzes/submit - Score: $($quizRes.scorePercentage)%"
        $failedCount++
    }
} catch {
    Write-Output "[ERROR] POST /api/v1/quizzes/submit - $_"
    $failedCount++
}

# 4. Test GET /api/v1/admin/registrations
try {
    $adminRes = Invoke-RestMethod -Uri "$baseUrl/api/v1/admin/registrations" -Method GET
    if ($adminRes.success -eq $true -and $adminRes.data -ne $null) {
        Write-Output "[PASS] GET /api/v1/admin/registrations - Live Total: $($adminRes.totalCount)"
        $passedCount++
    } else {
        Write-Output "[FAIL] GET /api/v1/admin/registrations"
        $failedCount++
    }
} catch {
    Write-Output "[ERROR] GET /api/v1/admin/registrations - $_"
    $failedCount++
}

Write-Output ""
Write-Output "================================================="
Write-Output "TOTAL PASSED: $passedCount | TOTAL FAILED: $failedCount"
Write-Output "================================================="
