import React from "react";

const Team_Rules = () => {
  return (
    <section>
      <div className="my-10">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Team <span className="text-green-600"> Rules </span>{" "}
        </h1>
        <ul className="list-inside list-disc md:ml-4 text-xl font-bold text-neutral-400">
          <li>Teams must consist of 2 to 5 members.</li>
          <li>
            Solo participants will be grouped into random teams, but they can
            confirm that or reject and participate individually.
          </li>
          <li>
            All team members must register individually using the registration
            link in the website.
          </li>
          <li>
            Each one will receive a team confirmation email to finalize your
            team setup.
          </li>
        </ul>
      </div>
      <div className="my-10">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Scoring <span className="text-green-600"> System </span>{" "}
        </h1>
        <ul className="list-inside list-disc md:ml-4 text-xl font-bold text-neutral-400">
          <li>Each challenge has a point value based on difficulty</li>
          <li>Points are awarded only when the correct flag is submitted</li>
          <li>The leaderboard updates in real-time.</li>
          <li>
            In case of ties, the winning team will depend on the time taken to
            submit the flags.
          </li>
        </ul>
      </div>
      <div className="my-10">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Some <span className="text-green-600"> Important</span> Rules
        </h1>
        <ul className="list-inside list-disc md:ml-4 text-xl font-bold text-neutral-400">
          <li>
            Flag Sharing between teams will lead to disqualification of both
            teams.
          </li>
          <li>Bruteforcing the flags is Prohibited.</li>
          <li>
            Attacking or sabotaging the platform, other teams, or infrastructure
            will also lead to disqualification.
          </li>
          <li>
            Use of search engines, documentation, public tools, and research is
            allowed during the competition.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Team_Rules;
