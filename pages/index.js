import { Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sanity Store</title>
        <meta
          name="description"
          content="the eCommerce site by next and sanity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography component={"h1"} variant="h1">
        Sanity store
      </Typography>
    </div>
  );
}
