import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

const name = 'Nicola Regattieri';
export const siteTitle = 'NicDev.dev';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Nicola Regattieri developer blog" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={`${styles.headerWrapper} ${utilStyles.flexRowCenter}`}>
          <div className={utilStyles.flex}>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={`${utilStyles.headingXl} ${styles.mainHeading}`}>
              {name}
            </h1>
          </div>

          <nav className={`${styles.headerNav}`}>
            <ul className={utilStyles.flexRowCenter}>
              <li>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Hobbies</a>
                </Link>
              </li>
            </ul>
          </nav>
          <nav className={`${styles.headerNav}`}>
            <ul className={utilStyles.flexRowCenter}>
              <li>
                <Link href="/">
                  <a>
                    {' '}
                    <IoLogoGithub
                      size="1.3em"
                      title="Github"
                      className="gitLogo"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <IoLogoTwitter
                      size="1.3em"
                      title="Twitter"
                      className="twitterLogo"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <IoLogoLinkedin
                      size="1.3em"
                      title="Linkedin"
                      className="linkedinLogo"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )} */}
      </header>
      <main className={styles.container}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
