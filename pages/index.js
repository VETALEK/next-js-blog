import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { siteTitle } from '../components/layout';

export default function Home() {
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
    </Layout>
  );
}