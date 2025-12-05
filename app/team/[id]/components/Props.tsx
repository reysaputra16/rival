interface LatestCompetitionLeagueTableTeamEntryProps {
  team: {
    name: string;
    img: string;
    position: number;
    gamesPlayed: number;
    wins: number;
    draws: number;
    losses: number;
    goalDiff: number;
    points: number;
  };
  grayedOut: boolean;
}

interface CompetitionStageLeagueTableProps {
  competitionStage: string;
  competitionName: string;
  competitionLogo: string;
  teamPosition: CompetitionStageLeagueTableTeamProps;
  upperTeamPosition: CompetitionStageLeagueTableTeamProps;
  lowerTeamPosition: CompetitionStageLeagueTableTeamProps;
}

interface CompetitionStageLeagueTableTeamProps {
  name: string;
  img: string;
  position: number;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalDiff: number;
  points: number;
  mostTop: boolean;
  mostBottom: boolean;
}

interface CompetitionStageKnockoutRoundProps {
  competitionStage: string;
  competitionLogo: string;
  matchInfo: CompetitionStageKnockoutRoundMatchProps;
}

interface CompetitionStageKnockoutRoundMatchProps {
  type: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  homeScore: number;
  awayScore: number;
  status: string;
  time: string;
  date: string;
  location: string;
}
