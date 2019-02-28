import tweetId from "../utils/regions/tweetId.js";
import tweets from "../utils/regions/tweets.js";
import _ from "lodash";

import { TwitterTweetEmbed } from "react-twitter-embed";

export function RegionCard(props) {
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

  const tweetContent = tweets[props.tweetNum];

  const tweetEmbed = _.isUndefined(tweetContent) ? null : (
    <TwitterTweetEmbed
      tweetId={tweetId[props.tweetNum]}
      options={{ conversation: "none", dnt: true }}
    />
  );

  return (
    <div style={card}>
      <div style={cardHeader}>
        <strong>{props.regionsName}</strong>
      </div>
      <div style={cardBody}>{tweetContent}</div>
      {tweetEmbed}
    </div>
  );
}
