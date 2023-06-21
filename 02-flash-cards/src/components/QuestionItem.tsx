import { Question } from "../types/question";

interface Props {
  question: Question;
  selectedCartId: number | null;
  onSetCardId: (id: number) => void;
}

const QuestionItem = ({ question, selectedCartId, onSetCardId }: Props) => {
  return (
    <div
      className={`h-60 flex items-center justify-center border border-red-600 rounded-xl font-semibold cursor-pointer duration-300 p-4 ${
        selectedCartId === question.id
          ? "bg-red-600 text-white"
          : " text-red-600"
      }`}
      onClick={() => onSetCardId(question.id)}
    >
      <p className="text-center">
        {selectedCartId === question.id ? question.answer : question.question}
      </p>
    </div>
  );
};

export default QuestionItem;
