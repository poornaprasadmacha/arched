import { NextResponse } from "next/server";
import { INITIAL_QUIZZES } from "@/lib/data/initial-data";

export async function POST(request: Request) {
  try {
    const { quizId, answers } = await request.json(); // answers is { [questionId]: selectedOptionIndex }

    const quiz = INITIAL_QUIZZES.find(q => q.id === quizId);
    if (!quiz) {
      return NextResponse.json({ success: false, error: "Quiz not found" }, { status: 404 });
    }

    let correctCount = 0;
    const review = quiz.questions.map(q => {
      const selected = answers[q.id];
      const isCorrect = selected === q.correctIndex;
      if (isCorrect) correctCount++;
      return {
        questionId: q.id,
        text: q.text,
        selectedOption: selected !== undefined ? q.options[selected] : "Not Answered",
        correctOption: q.options[q.correctIndex],
        isCorrect,
        explanation: q.explanation,
      };
    });

    const scorePercentage = Math.round((correctCount / quiz.questions.length) * 100);
    const passed = scorePercentage >= quiz.passingScore;

    return NextResponse.json({
      success: true,
      scorePercentage,
      correctCount,
      totalQuestions: quiz.questions.length,
      passed,
      review,
      leaderboardRank: Math.floor(Math.random() * 5) + 1,
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Grading calculation failed" }, { status: 500 });
  }
}
