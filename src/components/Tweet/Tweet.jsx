import * as React from "react";
import AvatarIcon from "../AvatarIcon/AvatarIcon";
import { formatLikes } from "../../utils/format";
import "./Tweet.css";

export default function Tweet({ tweet }) {
  const [collapse, setCollapse] = React.useState(false);
  return (
    <div className="tweet" data-tweet-id={tweet.id}>
      <div className="tweet-avatar">
        <AvatarIcon />
      </div>

      <div className="tweet-content">
        <TweetUserInfo
          name={tweet.name}
          handle={tweet.handle}
          setCollapse={setCollapse}
          collapse={collapse}
        />
        {collapse == false && (
          <>
            <p className="tweet-text">{tweet.text}</p>
            <TweetFooter
              numComments={tweet.comments}
              numRetweets={tweet.retweets}
              numLikes={tweet.likes}
            />
          </>
        )}
      </div>
    </div>
  );
}

export function TweetUserInfo({ name, handle, setCollapse, collapse }) {
  return (
    <div className="tweet-user-info">
      <div className="meta">
        <p className="name">{name}</p>
        <span className="handle">@{handle}</span>
        <span className="dot">•</span>
        <span className="ts">1 min</span>
      </div>
      <i
        className={collapse == true ? "fa fa-angle-down" : "fa fa-angle-up"}
        onClick={() => setCollapse(!collapse)}
      ></i>
    </div>
  );
}

export function TweetFooter({ numComments, numRetweets, numLikes }) {
  let [likes, setLikes] = React.useState(0);
  return (
    <div className="tweet-footer">
      <span>
        <i className="fa fa-comment"></i>
        {numComments || 0}
      </span>
      <span>
        <i className="fa fa-retweet"></i>
        {numRetweets || 0}
      </span>
      <span
       
        onClick={() => {
          
          setLikes(likes + 1);
        }}
      >
        <i className="fas fa-heart"></i>
        {formatLikes(numLikes || likes)}
      </span>
      <span>
        <i className="fa fa-envelope"></i>
      </span>
    </div>
  );
}
