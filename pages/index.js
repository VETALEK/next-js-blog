import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hi there! My name is Vitalaik, i am front-end dev =)</p>
        <p>
          You can check my post{' '}
          <Link href="/posts/first-post">
            <a>here!</a>
          </Link>
        </p>
      </section>

      <section>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({ id, date, title }) => (
              <li 
                key={id}
                className={utilStyles.listItem}
              >
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>

                <br />
                
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  );
}
