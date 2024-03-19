import * as React from 'react';
import { Analytics } from '@vercel/analytics/react';
import SEO from '@widgets/SEO';
import Footer from '@widgets/Footer';

const styles: Record<string, React.CSSProperties> = {
  page: {
    padding: 16,
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    display: 'block',
    maxWidth: 880,
  },
};

const Page = ({ title, children }: { title?: string; children: React.ReactNode }) => {
  const topRef = React.useRef<HTMLDivElement>(null);

  return (
    <main style={styles.page}>
      <div id="top" ref={topRef} />
      <SEO title={title} />
      {children}
      <Footer onBackToTop={() => topRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <Analytics />
    </main>
  );
};

export default Page;
