export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl">My name is Tadashi Kumazawa</h1>
        <p className="text-lg">
          contact: <a className="underline" href="mailto:tadashi.opal.1022@gmail.com">tadashi.opal.1022@gmail.com</a>
        </p>
        <a
          className="inline-flex items-center justify-center rounded border border-black px-4 py-2 text-sm hover:bg-black hover:text-white"
          href="https://www.noveltools.app/blog"
          rel="noopener noreferrer"
          target="_blank"
        >
          blog
        </a>
      </div>
    </main>
  );
}