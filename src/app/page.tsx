export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl">my name is tadashi.</h1>
        <p className="text-lg">
          building{' '}
          <a
            className="underline text-blue-600 hover:text-blue-700"
            href="https://noveltools.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            novel
          </a>
        </p>
        <p className="text-lg">
          contact: <a className="underline" href="mailto:tadashi.opal.1022@gmail.com">tadashi.opal.1022@gmail.com</a>
        </p>
      </div>
    </main>
  );
}