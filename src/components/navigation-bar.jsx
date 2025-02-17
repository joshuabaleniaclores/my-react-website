const NavigationBar = () => {
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className="flex justify-center items-center w-full p-6 shadow-md">
      <ul className="flex space-x-10">
        {links.map(({ id, link }) => (
          <li key={id} className="cursor-pointer text-[#09122C] capitalize hover:text-violet-500 active:text-violet-500">
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
