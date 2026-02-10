interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
      
      {/* Left */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-xl"
      >
        ☰
      </button>

      <h2 className="font-semibold text-lg">
        Analytics Overview
      </h2>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span className="cursor-pointer">🔔</span>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <span className="hidden sm:block">Admin</span>
        </div>
      </div>
    </header>
  );
}
