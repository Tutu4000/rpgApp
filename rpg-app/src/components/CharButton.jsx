const CharButton = ({
  imageSrc,
  altText,
  onClick,
  onDelete,
  children,
  isSelected,
  player,
}) => {
  const selectedClass = isSelected ? "active-button" : "";
  
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <button onClick={onClick} className={`char-button ${selectedClass}`}>
      <div className="delete-button" onClick={handleDeleteClick}>X</div>
      <img className="char-thumbnail" src={imageSrc} alt={altText} />
      <div className="text-content">
        <p>{children}</p>
        <small>Player: {player}</small>
      </div>
    </button>
  );
};

export default CharButton;
