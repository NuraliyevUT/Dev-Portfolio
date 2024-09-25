export const Header = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#", special: true },
  ];

  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`nav-item ${
              item.special
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
            aria-label={item.name}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
