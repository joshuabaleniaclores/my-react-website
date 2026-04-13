export function SkillIcon({ skill }) {
  return (
    <svg
      role="img"
      aria-label={skill.name}
      className="h-6 w-6 flex-shrink-0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {skill.paths.map((pathProps, i) => (
        <path key={i} {...pathProps} />
      ))}
    </svg>
  );
}
