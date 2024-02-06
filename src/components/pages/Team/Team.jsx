import React, { useState } from 'react';
import "./Team.css";
import Team1 from "./Team1/Team1.jsx";
import Team2 from "./Team2/Team2.jsx";
import Team3 from "./Team3/Team3.jsx";
import Team4 from "./Team4/Team4.jsx";
import FacultyAdvisor from './Faculty/FacultyAdvisor.jsx';
import { AwesomeButton } from "react-awesome-button";
function Team() {
  const [selectedTeam, setSelectedTeam] = useState(1);

  const showTeam = (teamNumber) => {
    setSelectedTeam(teamNumber);
  };

  return (
    <div>
     <FacultyAdvisor/>
      <nav>
        <ul>
          <li><button onClick={() => showTeam(1)}>2019-23</button></li>
          <li><button onClick={() => showTeam(2)}>2020-24</button></li>
          <li><button onClick={() => showTeam(3)}>2021-25</button></li>
          <li><button onClick={() => showTeam(4)}>2022-26</button></li>
        </ul>
      </nav>

      <div>
        {/* Render the selected team based on the state */}
        {selectedTeam === 1 && <Team1 />}
        {selectedTeam === 2 && <Team2 />}
        {selectedTeam === 3 && <Team3 />}
        {selectedTeam === 4 && <Team4 />}
      </div>
    </div>
  );
}

export default Team;
