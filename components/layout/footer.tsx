export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 bg-bg-200 py-1 text-xs">
      <div>
        © 2023 – 2023 cos{' '}
        <a className="text-blue-400" href="https://github.com/yusixian" target="_blank">
          @cosine
        </a>
      </div>
      <div>
        <a target="_blank" href="https://icons8.com/icon/tkuwWnXfr4fn/adobe-after-effects">
          Tabby Nav
        </a>{' '}
        icon by{' '}
        <a className="text-blue-400" href="https://icons8.com" target="_blank">
          Icons8
        </a>{' '}
        &{' '}
        <a className="text-blue-400" href="https://react-icons.github.io/react-icons" target="_blank">
          react-icons
        </a>
      </div>
    </footer>
  );
}
