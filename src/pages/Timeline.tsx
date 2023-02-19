import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Timeline.css";

export function Timeline() {
  const [newTweet, setNewTweet] = useState(""); //assim o react monitora mudanças em variáveis
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "Teste",
    "Deu certo tweetar!",
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault(); // prevenir comportamento padrao, como o redirecionamento

    setTweets([newTweet, ...tweets]); // aqui envolve conceito de imutabilidade, se está copiando as infos do array original e nao editando o mesmo
    setNewTweet("");
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/karinacomk.png"
            alt="Karina de Almeida Lima"
          />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
