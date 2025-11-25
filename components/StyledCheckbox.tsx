const StyledCheckbox: React.FC<{
  label: string;
  id: string;
  isChecked: boolean;
  setChecked: (currentCheck: boolean) => void;
}> = ({ label, id, isChecked, setChecked }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={() => {
          setChecked(!isChecked);
        }}
        className="appearance-none h-5 w-5 border border-gray-600 rounded bg-gray-800 checked:bg-cyan-600 checked:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-150 cursor-pointer"
      />
      <label htmlFor={id} className="text-gray-300 select-none cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default StyledCheckbox;
