interface MatchCardProps {
  competitionName?: string;
  competitionLogo?: string;
  homeTeam: string;
  homeLogo: string;
  awayTeam: string;
  awayLogo: string;
  date?: string;
  time?: string;
  homeScore?: number;
  awayScore?: number;
  status: string;
  liveTime: number;
}

interface RecentMatchWrapper {
  matches: RecentMatchProps[];
}

interface RecentMatchProps {
  homeLogo: string;
  awayLogo: string;
  homeScore: number;
  awayScore: number;
  outcome: string;
}

interface CompetitionProps {
  competitionLogo: string;
  competitionName: string;
}
