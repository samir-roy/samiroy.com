import * as React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { AnimateGlitches } from '@samiroy/sprites';
import SEO from '@widgets/SEO';
import Footer from '@widgets/Footer';

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

const Page = ({ title, noFooter, children }: { title?: string; noFooter?: boolean; children: React.ReactNode }) => {
  const topRef = React.useRef<HTMLDivElement>(null);

  return (
    <div style={styles.page}>
      <div id="top" ref={topRef} />
      <SEO title={title} />
      <main>{children}</main>
      {!noFooter && <Footer onBackToTop={() => topRef.current?.scrollIntoView({ behavior: 'smooth' })} />}
      <Analytics />
      <AnimateGlitches />
    </div>
  );
};

export default Page;
