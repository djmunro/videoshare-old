import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { db } from "../firebase";
import YouTube from "./YouTube";

const Videos = () => {
  const { slug: subject } = useParams();
  const link = React.useRef();
  const [data, loading, error] = useDocumentData(db.doc(`videos/${subject}`));

  const handleOnSubmit = event => {
    // handle validation here
    const url = link.current.value;

    if (url === "") return;

    db.collection("videos")
      .doc(subject)
      .update({
        links: [url, ...data.links]
      });

    event.preventDefault();
  };

  return (
    <>
      {/* <div class="columns body-columns">
        <div class="column is-half is-offset-one-quarter">
          <div class="card">
            <div class="header">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://source.unsplash.com/random/96x96"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://source.unsplash.com/random/1280x960"
                  alt="Placeholder image"
                />
              </figure>
            </div>

            <div class="card-footer">
              <div class="columns is-mobile">
                <div class="column is-11">
                  <div class="field">
                    <div class="control">
                      <input
                        class="input is-medium"
                        type="text"
                        placeholder="Add a comment . . ."
                      />
                    </div>
                  </div>
                </div>
                <div class="column has-text-centered">
                  <button class="button">
                    <i class="material-icons">more_horiz</i>
                  </button>
                </div>
              </div>
            </div> */}

      {/* 
                <div class="card-content">
                    <div class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item has-text-centered">
                                <a href="">
                                    <i class="material-icons">favorite_border</i>
                                </a>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <a href="">
                                        <i class="material-icons">chat_bubble_outline</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <p>
                            <strong>32 Likes</strong>
                        </p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a>@bulmaio</a>.
                        <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br>
                        
                    </div>
                </div>
            
             */}
      {/* </div>
        </div>
      </div> */}

      <Link to="/">
        <button>Back to subjects</button>
      </Link>

      <h2>{`${data ? data.name : "..."} videos`}</h2>
      <form onSubmit={handleOnSubmit}>
        <input ref={link} />
        <button>Add Video</button>
      </form>
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        {data && data.links.map(link => <YouTube key={link} link={link} />)}
      </div>
    </>
  );
};
export default Videos;
