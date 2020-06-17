import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import Date from '../../components/date';
import Layout from '../../components/layout';
import styles from './blog.module.css';

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.mediumWrapper}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, image, alt }) => (
              <li className={utilStyles.listItem} key={id}>
                {image && (
                  <img
                    className={styles.blogListImage}
                    src={image}
                    alt={alt}
                  ></img>
                )}
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
