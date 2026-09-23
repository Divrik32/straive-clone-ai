import { Link } from "react-router-dom";

export default function NavDropdown({ menu, onNavigate }) {
  if (!menu) return null;

  if (menu.type === "cards") {
    return (
      <div className="grid grid-cols-4 gap-6">
        {menu.cards.map(({ label, img, alt, path }) => (
          <Link key={label} to={path || "#"} onClick={onNavigate} className="group">
            <div className="w-full aspect-square rounded-lg overflow-hidden mb-3">
              <img src={img} alt={alt || label} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm text-[#2a2a3a] group-hover:text-brand-orange">{label}</span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-10">
      <div className="flex-1">
        {menu.heading && (
          <>
            <h3 className="text-xl text-[#2a2a3a] mb-3">{menu.heading}</h3>
            <div className="h-px bg-black/10 mb-5" />
          </>
        )}
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {menu.columns.map((col, ci) => (
            <ul key={ci} className="space-y-5">
              {col.map((item) => {
                const isLink = typeof item === "object" && item.path;
                const label = isLink ? item.label : item;
                return (
                  <li key={label}>
                    {isLink ? (
                      <Link
                        to={item.path}
                        onClick={onNavigate}
                        className="text-[15px] text-[#3a3a4a] hover:text-brand-orange transition-colors"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a href="#" className="text-[15px] text-[#3a3a4a] hover:text-brand-orange transition-colors">
                        {label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>

      {menu.image && (
        <div className="hidden md:flex w-64 h-44 shrink-0 rounded-lg overflow-hidden self-center relative">
          <img
            src={menu.image.img}
            alt={menu.image.alt || "Menu preview"}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}