import * as React from 'react';
import { Analytics } from '@vercel/analytics/react';
import SEO from '@widgets/SEO';
import Footer from '@widgets/Footer';
import { ThemeProvider } from '../context/ThemeContext';

const styles: Record<string, React.CSSProperties> = {
  page: {
    paddingTop: 32,
    paddingLeft: 'var(--page-padding)',
    paddingRight: 'var(--page-padding)',
    paddingBottom: 64,
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    display: 'block',
    maxWidth: 768,
  },
};

const Page = ({ title, children }: { title?: string; children: React.ReactNode }) => {
  const topRef = React.useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider>
      <div style={styles.page}>
        <div id="top" ref={topRef} />
        <SEO title={title} />
        <main>{children}</main>
        <Footer onBackToTop={() => topRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        <Analytics />
      </div>
    </ThemeProvider>
  );
};

export default Page;
