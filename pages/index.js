import React from "react";
import _ from "lodash";
import Head from "next/head";
import Link from "next/link";

import species from "../src/utils/pokemon/species.js";
import { Card } from "../src/components/Card.js";
import { ScrollButton } from "../src/components/ScrollButton.js";

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
        <title>#Pokemon Facts</title>
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
          <h1>#Pokemon Facts</h1>
          <Link href="/regions" as={process.env.BACKEND_URL + "/regions"}>
            <a>Region Tweets</a>
          </Link>
        </div>
        {_.map(species, (species, index) => (
          <Card
            speciesName={species}
            speciesNum={_.padStart(index + 1, 3, "0")}
            tweetNum={index}
            key={index}
          />
        ))}
        <ScrollButton />
      </div>
    </>
  );
};
