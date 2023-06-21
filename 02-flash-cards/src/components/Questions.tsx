import { useState } from "react";
import { Question } from "../types/question";
import QuestionItem from "./QuestionItem";

interface Props {
  questions: Question[];
}

const Questions = ({ questions }: Props) => {
  const [selectedCartId, setSelectedCartId] = useState<number | null>(null);

  function handleSelectedCartId(id: number) {
    if (id == selectedCartId) {
      setSelectedCartId(null);
    } else {
      setSelectedCartId(id);
    }
  }

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {questions.map((question) => {
        return (
          <QuestionItem
            key={question.id}
            question={question}
            selectedCartId={selectedCartId}
            onSetCardId={handleSelectedCartId}
          />
        );
      })}
    </div>
  );
};

export default Questions;
