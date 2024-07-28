const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-2 m-2 font-bold text-gray-600 bg-gray-200 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
