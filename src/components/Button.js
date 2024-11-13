const Button = ({ name }) => {
  return (
    <div>
      <button className="px-2 md:px-4 py-1 md:py-2 m-1 md:m-2 text-sm md:text-lg font-bold text-gray-600 bg-gray-200 rounded-lg whitespace-nowrap">
        {name}
      </button>
    </div>
  );
};

export default Button;
