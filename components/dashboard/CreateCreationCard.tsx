interface CreationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const CreationCard: React.FC<CreationCardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:bg-gray-600 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center border-t-4 border-cyan-500 w-full"
    >
      {icon}
      <h2 className="text-2xl font-bold text-white mt-4 mb-2">{title}</h2>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default CreationCard;
