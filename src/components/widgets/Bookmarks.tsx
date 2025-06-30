import * as React from 'react';

type Bookmark = {
  label: string;
  url: string;
};

type GlobalWindow = Window & {
  samiroy?: {
    bookmarks?: {
      add: (label: string, url: string) => void;
      remove: (label: string) => void;
    };
  };
};

const DEFAULT_BOOKMARKS: Bookmark[] = [
  { label: 'samiroy.com', url: 'https://samiroy.com' },
  { label: 'poonji.io', url: 'https://poonji.io' },
  { label: 'github.com', url: 'https://github.com' },
];

const STORAGE_KEY = 'samiroy-bookmarks';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = React.useState<Bookmark[]>(DEFAULT_BOOKMARKS);

  // load bookmarks from local storage
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setBookmarks(JSON.parse(stored));
      }
    } catch {
      // do nothing
    }
  }, []);

  // set up window api
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const globalWindow = window as GlobalWindow;
      if (globalWindow.samiroy) {
        return;
      }
      globalWindow.samiroy.bookmarks = {
        add: (label: string, url: string) => {
          const storedBookmarks = localStorage.getItem(STORAGE_KEY);
          const current = storedBookmarks ? JSON.parse(storedBookmarks) : DEFAULT_BOOKMARKS;
          const updated = [...current, { label, url }];
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
          setBookmarks(updated);
        },
        remove: (label: string) => {
          const storedBookmarks = localStorage.getItem(STORAGE_KEY);
          const current = storedBookmarks ? JSON.parse(storedBookmarks) : DEFAULT_BOOKMARKS;
          const updated = current.filter((bookmark: Bookmark) => bookmark.label !== label);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
          setBookmarks(updated);
        },
      };
    }
  }, []);

  return (
    <div
      className="boxed m-auto center"
      style={{
        width: 480,
        maxWidth: '100%',
        height: 'calc(100vh - 580px)',
        lineHeight: '2em',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {bookmarks.map((bookmark) => (
        <a key={bookmark.url} href={bookmark.url} style={{ textDecoration: 'none' }}>
          {bookmark.label}
        </a>
      ))}
    </div>
  );
};

export default React.memo(Bookmarks);
