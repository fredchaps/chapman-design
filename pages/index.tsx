import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NodeShape } from "types/Node";
import React, { useMemo } from "react";
import NodeTree from "components/NodeTree";

const black = "#333";

const homeNodes: NodeShape = {
  name: "CD",
  background: black,
  url: "/",
  children: [
    { name: "Blog", background: black, url: "/blog" },
    { name: "Sandbox", background: black, url: "/sandbox" },
    { name: "Projects", background: black, url: "/projects" },
  ],
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NodeTree clusterData={homeNodes} width={500} height={500} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
