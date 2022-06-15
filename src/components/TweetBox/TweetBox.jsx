import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox(props) {
  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value);
  };
  const handleOnSubmit = () => {
    console.log("before", props.tweetText);
    let newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length,
    };

    props.setTweets(props.tweets.concat([newTweet]));
    props.setTweetText("");
    console.log("after", props.tweetText);
    props.userProfile.numTweets = props.userProfile.numTweets++;
  };
  return (
    <div className="tweet-box">
      <TweetInput
        value={props.tweetText}
        handleOnChange={handleOnTweetTextChange}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText} />

        <TweetSubmitButton
          disabled={
            props.tweetText.length > 0 && props.tweetText.length < 141
              ? true
              : false
          }
          handleOnSubmit={handleOnSubmit}
        />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span className="tweet-length">{140 - props.tweetText.length}</span>;
}

export function TweetSubmitButton({ handleOnSubmit }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>

      <button className="tweet-submit-button" onClick={handleOnSubmit}>
        Tweet
      </button>
    </div>
  );
}
