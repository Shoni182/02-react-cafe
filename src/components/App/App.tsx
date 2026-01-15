// import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { useState } from "react";
import type { Votes } from "../../types/Votes";
import type { VoteType } from "../../types/Votes";
import VoteOptions from "../VoteOptions/VoteOptions";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (voteName: VoteType) => {
    setVotes({
      ...votes,
      [voteName]: votes[voteName] + 1,
    });
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
    </>
  );
}
