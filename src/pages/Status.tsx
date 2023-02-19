import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";

export function Status() {
  const [newAnswer, setNewAnswer] = useState(""); //assim o react monitora mudanças em variáveis
  const [answers, setAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido!",
    "Parabéns pelo progresso!",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault(); // prevenir comportamento padrao, como o redirecionamento

    setAnswers([newAnswer, ...answers]); // aqui envolve conceito de imutabilidade, se está copiando as infos do array original e nao editando o mesmo
    setNewAnswer("");
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid maxime consequatur voluptatibus quam non adipisci rem reiciendis. Placeat tenetur amet aut debitis, similique corrupti alias provident aspernatur, excepturi nisi quia." />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/karinacomk.png"
            alt="Karina de Almeida Lima"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
