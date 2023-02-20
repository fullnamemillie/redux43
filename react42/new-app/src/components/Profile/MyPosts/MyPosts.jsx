import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../Redux/profile-reducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={s.myPosts}>My Posts</div>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
            ref={newPostElement}
            className={s.textarea}
          />
        </div>
        <div>
          <button onClick={onAddPost} className={s.button}>
            Add Post!
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
