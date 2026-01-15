import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { useState } from "react";
import type { Votes } from "../../types/votes";
import type { VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

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

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.container}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes !== 0 ? true : false}
      />
      <VoteStats
        votes={votes}
        totalVotes={totalVotes}
        positiveRate={positiveRate}
      />
      {totalVotes === 0 && <Notification />}
    </div>
  );
}
