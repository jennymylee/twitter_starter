import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox(props) {
  let handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value);
  };

  const handleOnSubmit = () => {
    let newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length,
    };
    props.setTweets((currentTweets) => [...currentTweets, newTweet]);

    // props.setTweets(props.tweets.concat([newTweet]));
    // props.setTweets(...props.tweets, newTweet);

    props.setTweetText(``);

    props.userProfile.numTweets = props.userProfile.numTweets + 1;
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
              ? false
              : true
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
  if (props.tweetText.length == 0) {
    return <span></span>;
  }
  if (140 - props.tweetText.length < 0) {
    return (
      <span className="tweet-length red">{140 - props.tweetText.length}</span>
    );
  } else {
    return <span className="tweet-length">{140 - props.tweetText.length}</span>;
  }
}

export function TweetSubmitButton({ handleOnSubmit = () => {}, disabled }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>

      <button
        className="tweet-submit-button"
        disabled={disabled}
        onClick={handleOnSubmit}
      >
        Tweet
      </button>
    </div>
  );
}
