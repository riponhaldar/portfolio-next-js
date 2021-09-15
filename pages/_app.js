import '../styles/globals.css';
import { TweenMax } from 'gsap';
import { useCallback, useEffect, useRef } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  let app = useRef(null);

  // Scrollbar.init(Document.querySelector('#full_page'));

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
  });
  return (
    <div className='fullpags  ' ref={(el) => (app = el)}>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
  );
}

export default MyApp;
