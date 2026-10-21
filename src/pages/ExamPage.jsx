import { useState, useEffect } from "react";
import "../styles/ExamPage.css";

const questions = [
  {
    id: 1,
    question:
      "A patient presents to the office with joint swelling and stiffness that began 3 years ago. On physical examination, she has bilateral hand deformities, and lab tests are ordered. Which of these tests is most specific for her most likely disease?",
    options: [
      "Elevated anti-CCP",
      "Elevated rheumatoid factor",
      "Joint narrowing on x-ray",
      "Elevated antinuclear antibodies",
      "Elevated C-reactive protein",
    ],
  },
  {
    id: 2,
    question:
      "A 30-year-old female presents to the clinic with fatigue and joint pain. She has had several miscarriages, and two prior deep vein thromboses (DVTs). Which of the following antibodies is most likely present in this patient?",
    options: [
      "Anti-basement membrane",
      "Antiphospholipid",
      "Anti-A",
      "Anti-U1 ribonucleoprotein",
      "Anti-Scl-70",
    ],
  },
  {
    id: 3,
    question:
      "A 26-year-old female presents to her family physician for the third time in a year with joint pain, fatigue, and intermittent fevers and rashes. Her complete blood count shows no signs of infections, but her erythrocyte sedimentation rate (ESR) is elevated. Which of the following labs is the best initial test for ruling out autoimmune disease as a cause of her symptoms?",
    options: [
      "Serum complement levels",
      "Serum rheumatoid factor",
      "Anti-dsDNA antibody",
      "Antinuclear antibody",
    ],
  },
  {
    id: 4,
    question: "Which of the following drugs is implicated in lupus?",
    options: [
      "Procainamide",
      "Aspirin",
      "Omalizumab",
      "Epinephrine",
    ],
  },
  {
    id: 5,
    question:
      "A 45-year-old female with a 15-year history of systemic lupus erythematosus (SLE) presents to the clinic with arthralgias and skin rashes and is diagnosed with an acute SLE flare. Which of the following conditions most commonly causes death in patients with severe SLE?",
    options: [
      "Breast cancer",
      "Liver cancer",
      "Renal failure",
      "Skin cancer",
    ],
  },
  {
    id: 6,
    question: "Long term management of Lupus includes :",
    options: [
      "Corticosteroids",
      "Hydralazine",
      "Procainamide",
      "Epinephrine",
    ],
  },
  {
    id: 7,
    question:
      "A patient with rheumatoid arthritis has severe polyarticular joint disease, carpal tunnel syndrome, and fatigue with weight loss. She is given naproxen (a nonsteroidal anti-inflammatory drug [NSAID]). Which of the following is the best next drug to add in the initial treatment of RA?",
    options: [
      "Ibuprofen",
      "Aspirin",
      "Anakinra",
      "Methotrexate",
      "Infliximab",
    ],
  },
  {
    id: 8,
    question:
      "A 45-year-old female presents with symmetric stiffness and swelling of all the PIP joints as well as several MCP joints in her hands. She states that she has morning stiffness that ultimately improves when she starts using her hands. Which of the following is the most likely etiology of this condition?",
    options: [
      "Infection",
      "Mechanical injury",
      "Nonimmune bony overgrowth",
      "Urate crystal deposition",
      "Autoimmune disease",
    ],
  },
  {
    id: 9,
    question:
      "Why are parotid glands often enlarged in Sjögren syndrome?",
    options: [
      "Lymphocytic infiltration of the gland",
      "Immune complex deposition in the gland",
      "Hyperplasia of the gland",
      "Atrophy of the gland",
    ],
  },
  {
    id: 10,
    question:
      "Which of the following autoantibodies is more likely to be detected in a patient with limited cutaneous systemic sclerosis?",
    options: [
      "Anti-phospholipid antibodies",
      "Anti-histone antibodies",
      "Anti-Scl-70 antibodies",
      "Anti-RNA polymerase III antibodies",
      "Anti-centromere antibodies",
    ],
  },
];


function ExamPage() {
  const [answers, setAnswers] = useState({});
  const [elapsedSeconds, setElapsedSeconds] = useState(270 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      secs.toString().padStart(2, "0"),
    ].join(":");
  };

  const handleAnswerChange = (questionId, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const scrollToQuestion = (questionId) => {
    const element = document.getElementById(`question-${questionId}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="exam-page">

      {/* SESSION TIMER */}

      <div className="exam-timer">
        Session Duration: {formatTime(elapsedSeconds)}
      </div>


      {/* EXAM HEADER */}

      <header className="exam-header">
        <h1>ccc Autoimmunity - Requires Respondus LockDown <Browser></Browser></h1>
      </header>


      {/* EXAM CONTENT */}

      <div className="exam-layout">

        {/* LEFT QUESTION NAVIGATION */}

        <aside className="question-nav">

          <div className="nav-title">
            Questions
          </div>

          <div className="question-numbers">

            {questions.map((question) => {

              const isAnswered =
                answers[question.id] !== undefined;

              return (
                <button
                  key={question.id}
                  type="button"
                  className={`question-number ${
                    isAnswered ? "answered" : ""
                  }`}
                  onClick={() => scrollToQuestion(question.id)}
                >

                  <span className="question-number-value">
                    {question.id}
                  </span>

                  <span className="question-status">
                    {isAnswered ? "✓" : "--"}
                  </span>

                </button>
              );

            })}

          </div>

        </aside>


        {/* ALL QUESTIONS */}

        <main className="questions-container">

          {questions.map((question) => (

            <section
              key={question.id}
              id={`question-${question.id}`}
              className="question-card"
            >

              {/* QUESTION TITLE */}

              <div className="question-title">
                Question {question.id} <span>(1 point)</span>
              </div>


              {/* QUESTION TEXT */}

              <p className="question-text">
                {question.question}
              </p>


              {/* ANSWER OPTIONS */}

              <div className="options">

                {question.options.map((option, index) => {

                  const isSelected =
                    answers[question.id] === index;

                  return (
                    <label
                      key={index}
                      className={`option ${
                        isSelected ? "selected" : ""
                      }`}
                    >

                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={index}
                        checked={isSelected}
                        onChange={() =>
                          handleAnswerChange(
                            question.id,
                            index
                          )
                        }
                      />

                      <span>
                        {String.fromCharCode(65 + index)}.{" "}
                        {option}
                      </span>

                    </label>
                  );

                })}

              </div>


              {/* SAVED INDICATOR */}

              {answers[question.id] !== undefined && (
                <div className="saved-status">
                  ✓ Saved
                </div>
              )}

            </section>

          ))}

        </main>

      </div>


      {/* BOTTOM STATUS BAR */}

      <footer className="exam-status-bar">

        <div className="status-left">

          <span>
            Status: <strong>Connected</strong>
          </span>

          <span>
            Connection: <strong>P2P</strong>
          </span>

        </div>

      </footer>

    </div>
  );
}

export default ExamPage;