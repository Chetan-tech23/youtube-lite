import { USER_ICON } from "../utils/constant";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg p-1 md:p-2 my-1 md:my-2">
      <img
        className="w-8 md:w-11 h-8 md:h-11"
        alt="user-logo"
        src={USER_ICON}
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
