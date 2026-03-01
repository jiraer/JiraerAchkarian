export const Footer = () => {
    return (
      <footer className="mt-auto border-t border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-[11px] text-neutral-500 md:px-10 lg:px-16">
          <span>© {new Date().getFullYear()} Jiraer Achkarian</span>
          <span className="hidden md:inline">
            Built with Next.js, Node.js, and a motion-first design system.
          </span>
        </div>
      </footer>
    );
  };
  