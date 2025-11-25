interface SearchListProps {
  category: string;
  searchResults: Team[] | Match[] | Competition[];
  setSelectedId: (id: string) => void;
  setShowPopup: (bool: boolean) => void;
}

interface SearchProfileProps {
  category: string;
  id: string;
  setSelectedId: (id: string) => void;
  setShowPopup: (bool: boolean) => void;
}

interface Team {
  _id: string;
  teamName: string;
  sports: string[];
}

interface Match {
  _id: string;
  matchName: string;
  sport: string;
}

interface Competition {
  _id: string;
  competitionName: string;
  sports: string[];
}
