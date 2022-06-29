import Head from 'next/head'
import Image from 'next/image'
import EmbedSocialWidget from '../components/embedSocialWidget'
import Layout from '../components/layout'


export default function Home() {
  return (
    <div className="">


      <Layout className="">
        <div>
          <EmbedSocialWidget refId="b7964d352b1f6628a1cc448617d9c5095752d121" />
        </div>
        <h1 className="">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="">
          Get started by editing{' '}
          <code className="">pages/index.js</code>
        </p>

        <div className="">
          <a href="https://nextjs.org/docs" className="">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className=""
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className=""
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </Layout>

    </div>
  )
}
