import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.mediumWrapper}>
          Hi, I`m Nicola. I`m a front-end developer, specialized on making
          e-commerce websites. contact me on{' '}
          <a target="_blank" href="https://twitter.com/nicregattieri">
            Twitter
          </a>
        </p>
      </section>
    </Layout>
  );
}
