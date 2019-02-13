import React from "react";
import _ from "lodash";
import { TwitterTweetEmbed } from "react-twitter-embed";

import tweets from "../utils/tweets.js";
import tweetId from "../utils/tweetId.js";

export function Card(props) {
  const card = {
    maxWidth: "500px",
    minWidth: "220px",
    borderRadius: "5px",
    font: '1em/1.4 Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    backgroundColor: "#fff",
    margin: "2% auto",
    boxShadow:
      "0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0,0,0,.12)"
  };

  const cardHeader = {
    backgroundColor: "rgb(41,73,130)",
    borderRadius: "5px 5px 0px 0px",
    padding: "5px",
    color: "#fff",
    fontSize: "1.4rem",
    textAlign: "center",
    verticalAlign: "middle"
  };

  const cardBody = {
    padding: "10px",
    fontSize: ".9rem",
    color: "#757575",
    textAlign: "left"
  };

  const pokemonName = _.lowerCase(props.speciesName);
  const tweetNum = tweets[props.tweetNum];

  const spriteName = _.isEqual(pokemonName, "mr. mime")
    ? "mr-mime"
    : _.replace(_.replace(pokemonName, "♀", "-f"), "♂", "-m");

  return (
    <div className="card" style={card}>
      <div className="cardHeader" style={cardHeader}>
        <strong>{"#" + props.speciesNum}</strong> {props.speciesName}
        <img
          alt={`${props.speciesName}`}
          src={`https://img.pokemondb.net/sprites/sun-moon/icon/${spriteName}.png`}
        />
      </div>
      <div className="cardBody" style={cardBody}>
        {tweetNum}
      </div>
      <TwitterTweetEmbed tweetId={tweetId[props.tweetNum]} />
    </div>
  );
}
