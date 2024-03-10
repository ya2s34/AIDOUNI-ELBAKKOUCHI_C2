import { expect } from "chai";
import TeamGenerator from "../src/teamGenerator.js";

describe("TeamGenerator", () => {
  describe("generateTeams", () => {
    it("should generate teams with players distributed evenly", () => {
      const players = [
        "Player1",
        "Player2",
        "Player3",
        "Player4",
        "Player5",
        "Player6",
      ];
      const playersPerTeam = 2;
      const teamGenerator = new TeamGenerator(players, playersPerTeam);
      teamGenerator.generateTeams();

      const teams = teamGenerator.getTeams();
      const expectedTeamCount = Math.ceil(players.length / playersPerTeam);
      expect(teams).to.have.lengthOf(expectedTeamCount);

      teams.forEach((team) => {
        expect(team.players).to.have.lengthOf(playersPerTeam);
      });
    });
  });

  describe("getTeams", () => {
    it("should return an empty array if no teams are generated", () => {
      const players = [];
      const playersPerTeam = 3;
      const teamGenerator = new TeamGenerator(players, playersPerTeam);
      teamGenerator.generateTeams();

      const teams = teamGenerator.getTeams();
      expect(teams).to.be.an("array").that.is.empty;
    });
  });
});
