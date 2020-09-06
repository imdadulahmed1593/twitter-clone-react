import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Ahmed Imdad",
      username: "Imdad1593",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent.fdac25-1.fna.fbcdn.net/v/t31.0-8/18768534_1415885155124746_2951513025347305689_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=Elo5UJ1xmaYAX89aRl0&_nc_ht=scontent.fdac25-1.fna&oh=a7dacd08d0154b5cdb9e5d3106b34aa9&oe=5F78D212",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent.fdac25-1.fna.fbcdn.net/v/t31.0-8/18768534_1415885155124746_2951513025347305689_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=Elo5UJ1xmaYAX89aRl0&_nc_ht=scontent.fdac25-1.fna&oh=a7dacd08d0154b5cdb9e5d3106b34aa9&oe=5F78D212" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
