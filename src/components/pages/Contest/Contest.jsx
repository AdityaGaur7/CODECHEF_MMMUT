import React, { useState, useEffect } from "react";
import axios from "axios";
import './Contest.css'

const Contests = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    axios
      .get("https://codeforces.com/api/contest.list?gym=false")
      .then((response) => {
        const allContests = response.data.result.filter(
          (contest) => contest.phase === "BEFORE"
        );
        const today = new Date().setHours(0, 0, 0, 0) / 1000; // Current date in seconds
        const presentDayContests = allContests.filter(
          (contest) => new Date(contest.startTimeSeconds * 1000).setHours(0, 0, 0, 0) === today
        );
        const futureContests = allContests.filter(
          (contest) => new Date(contest.startTimeSeconds * 1000).setHours(0, 0, 0, 0) > today
        );
        const sortedFutureContests = futureContests.sort(
          (a, b) => b.startTimeSeconds - a.startTimeSeconds
        );
        setContests([...presentDayContests, ...sortedFutureContests]);
      })
      .catch((error) => {
        console.error("Error fetching contests:", error);
      });
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
 
   
    <div style={{padding:'4rem'}}> 
      <div className="container mx-auto bg-gray-800 text-white p-4 rounded border border-gray-600">
      <h1 className="text-3xl font-bold mb-4">Upcoming Contests</h1>
      <div className="flex flex-col-reverse contest">
  {contests.map((contest) => (
    <div key={contest.id} className="bg-gray-700 p-4 rounded border border-gray-600 my-4">
      <h2 className="text-xl font-bold">{contest.name}</h2>
      <p className="text-gray-300">Start Time: {formatDate(contest.startTimeSeconds)}</p>
      <p className="text-gray-300">Duration: {contest.durationSeconds / 3600} hours</p>
      <p className="text-gray-300">Type: {contest.type}</p>
    </div>
  ))}
</div>
    </div>
    </div>
    </>
  );
};

export default Contests;
