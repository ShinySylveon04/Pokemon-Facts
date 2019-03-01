import React from "react";
import Head from "next/head";
import Link from "next/link";
import _ from "lodash";

import { ScrollButton } from "../src/components/ScrollButton.js";
import { RegionCard } from "../src/components/RegionCard.js";
import regions from "../src/utils/regions/regions.js";

export default () => {
  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        a {
          color: rgb(41, 73, 130);
        }
      `}</style>
      <Head>
        <title>Pokemon Regions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <div
        className="App"
        style={{
          backgroundColor: "#fafafa",
          padding: "10px",
          height: "100%",
          marginTop: "-8px",
          marginLeft: "-8px",
          marginRight: "-8px"
        }}
      >
        <div
          style={{
            textAlign: "center",
            font:
              '1em/1.4 Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: "1.4rem",
            color: "rgb(41,73,130)"
          }}
        >
          <h1>Pokemon Regions</h1>
          <Link href="/">
            <a>#Pokemon Facts</a>
          </Link>
        </div>
        {_.map(regions, (regions, index) => (
          <RegionCard regionsName={regions} tweetNum={index} key={index} />
        ))}
        <ScrollButton />
      </div>
    </>
  );
};
