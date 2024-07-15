function Skill({ category, children, handleSkillChange, isSelected }) {
    const getIcon = (category) => {
      switch (category.toLowerCase()) {
        case 'intelligence':
          return '🧠'; // Icon for Intelligence
        case 'strength':
          return '💪'; // Icon for Strength
        case 'constitution':
          return '🛡️'; // Icon for Constitution
        case 'dexterity':
          return '🤸'; // Icon for Dexterity
        case 'wisdom':
          return '📚'; // Icon for Wisdom
        case 'charisma':
          return '💖'; // Icon for Charisma
        default:
          return '';
      }
    };
    return (
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <input onChange={handleSkillChange} type="checkbox" id={children.toLowerCase()} name={children.toLowerCase()} checked={isSelected} />
        <label htmlFor={children.toLowerCase()} style={{ marginLeft: '5px' }}>
          {getIcon(category)} {children}
        </label>
      </div>
    );
  }
  
  export default Skill;