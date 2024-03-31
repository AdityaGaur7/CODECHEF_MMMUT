import React, { useState, useEffect } from 'react';

function ContestList() {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const apiKey = '65605e755185fe79ea8d931e668bb648d9762715';
        const url = `https://clist.by/api/v4/json/contest/?limit=50&upcoming=true&end_time__during=30%20days&username=adgaur027&api_key=65605e755185fe79ea8d931e668bb648d9762715`;
        const response = await fetch(url);
        const data = await response.json();
        setContests(data.objects);
      } catch (error) {
        console.error('Error fetching contests:', error);
      }
    };

    fetchContests();
  }, []);

  return (
    <div style={{padding:'4rem',minHeight:'50vh'}}>
      <h1>Upcoming Coding Contests</h1>
      <ul style={{display:'flex',flexDirection:'column'}}>
        {contests.map((contest) => (
          <li key={contest.id} style={{border:'1px solid white',padding:'1rem'}}>
            <h3>{contest.host}</h3>
            <a href={contest.href}><strong>{contest.event}</strong></a> - {new Date(contest.start).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContestList;
