import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Post #1</title>
      </Head>

      <div style={{
        'display': 'flex',
        'alignItems': 'center',
        'gap': '12px'
      }}
      >
        <h1>
          First Post
        </h1>

        <Image 
          src="/images/profile.jpg" 
          alt="me"
          width={60}
          height={60}
          style={{
            'borderRadius': '50%'
          }}
        />
      </div>
    </Layout>
  );
}
