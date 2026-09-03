"use client";

import { useState } from "react";

type Question = {
  image: string;
  prompt: string;
  options: string[];
  correctIndex: number;
};

const QUESTIONS: Question[] = [
  {
    image: "https://picsum.photos/seed/cosa-se-quiz-lauterbrunnen/900/700",
    prompt:
      "The 72 waterfalls of the Lauterbrunnen Valley inspired which author to create a fantasy elven kingdom?",
    options: ["J R R Tolkien", "C S Lewis", "Isaac Asimov", "J K Rowling"],
    correctIndex: 0,
  },
  {
    image: "https://picsum.photos/seed/cosa-se-quiz-jungfrau/900/700",
    prompt:
      "What is the highest railway station in Europe, located high in the Swiss Alps?",
    options: ["Zermatt", "Gornergrat", "Jungfraujoch", "St. Moritz"],
    correctIndex: 2,
  },
  {
    image: "https://picsum.photos/seed/cosa-se-quiz-fondue/900/700",
    prompt:
      "Which Swiss dish is traditionally made by melting cheese and dipping in bread?",
    options: ["Rösti", "Raclette", "Birchermüesli", "Fondue"],
    correctIndex: 3,
  },
  {
    image: "https://picsum.photos/seed/cosa-se-quiz-lausanne/900/700",
    prompt:
      "Which major sporting body has its headquarters in Lausanne, Switzerland?",
    options: [
      "FIFA",
      "The International Olympic Committee",
      "UEFA",
      "World Athletics",
    ],
    correctIndex: 1,
  },
  {
    image: "https://picsum.photos/seed/cosa-se-quiz-languages/900/700",
    prompt: "How many official languages does Switzerland have?",
    options: ["2", "3", "4", "5"],
    correctIndex: 2,
  },
];

export default function SwissQuiz() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = QUESTIONS[step];
  const isLast = step === QUESTIONS.length - 1;

  function choose(optionIndex: number) {
    if (selected !== null) return; // lock in the answer once picked
    setSelected(optionIndex);
    if (optionIndex === question.correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function next() {
    if (isLast) {
      setFinished(true);
      return;
    }
    setStep((s) => s + 1);
    setSelected(null);
  }

  function retake() {
    setStep(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <section className="bg-[#f8f7f4] pb-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-10">
          The Big Swiss Quiz
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            key={finished ? "result" : question.image}
            className="w-full aspect-[4/3] bg-cover bg-center"
            style={{
              backgroundImage: `url('${
                finished
                  ? "https://picsum.photos/seed/cosa-se-quiz-result/900/700"
                  : question.image
              }')`,
            }}
          />

          <div className="max-w-[420px]">
            {finished ? (
              <>
                <p className="text-[12px] uppercase tracking-[0.12em] text-neutral-500 mb-3">
                  Result
                </p>
                <p className="text-[19px] text-neutral-900 mb-6">
                  You scored {score} out of {QUESTIONS.length}
                  {score === QUESTIONS.length ? " — a true Swiss expert!" : "."}
                </p>
                <button
                  onClick={retake}
                  className="inline-flex items-center border border-neutral-400 rounded-full px-6 py-2.5 text-sm text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors cursor-pointer"
                >
                  Try Again
                </button>
              </>
            ) : (
              <>
                <p className="text-[12px] uppercase tracking-[0.12em] text-neutral-500 mb-3 text-center md:text-left">
                  Question {step + 1}
                </p>
                <p className="text-[19px] leading-[1.5] text-neutral-900 mb-6">
                  {question.prompt}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {question.options.map((option, i) => {
                    const isChosen = selected === i;
                    const isCorrect = i === question.correctIndex;
                    const showState = selected !== null;

                    let stateClasses =
                      "border-neutral-300 text-neutral-800 hover:border-neutral-500";
                    if (showState && isCorrect) {
                      stateClasses =
                        "border-emerald-600 bg-emerald-50 text-emerald-800";
                    } else if (showState && isChosen && !isCorrect) {
                      stateClasses = "border-red-400 bg-red-50 text-red-700";
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => choose(i)}
                        disabled={selected !== null}
                        className={`border rounded px-4 py-3 text-[13px] text-center transition-colors cursor-pointer disabled:cursor-default ${stateClasses}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {selected !== null && (
                  <button
                    onClick={next}
                    className="inline-flex items-center border border-neutral-400 rounded-full px-6 py-2.5 text-sm text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors cursor-pointer"
                  >
                    {isLast ? "See Result" : "Next Question"}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
