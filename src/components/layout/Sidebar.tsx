interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`
        bg-white shadow-lg transition-all duration-300
        ${isOpen ? 'w-64' : 'w-16'}
        hidden md:block
      `}
    >
      <div className="p-4 font-bold text-xl">
        {isOpen ? '📊 Dashboard' : '📊'}
      </div>

      <nav className="mt-6 space-y-2">
        <NavItem label="Overview" isOpen={isOpen} />
        <NavItem label="Analytics" isOpen={isOpen} />
        <NavItem label="Users" isOpen={isOpen} />
        <NavItem label="Settings" isOpen={isOpen} />
      </nav>
    </aside>
  );
}

function NavItem({
  label,
  isOpen,
}: {
  label: string;
  isOpen: boolean;
}) {
  return (
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md mx-2 transition">
      {isOpen ? label : label.charAt(0)}
    </div>
  );
}
