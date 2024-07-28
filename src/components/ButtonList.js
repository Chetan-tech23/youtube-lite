import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Mixes",
    "Cricket",
    "Socker",
    "Live",
    "News",
    "Movies",
    "Popular Playlist",
    "The Kapil Sharma Show",
    "Tarak Mehta Ka Oolta Chashma",
  ];

  return (
    <div className="flex">
      {list.map((label) => (
        <Button key={label} name={label} />
      ))}
    </div>
  );
};

export default ButtonList;
