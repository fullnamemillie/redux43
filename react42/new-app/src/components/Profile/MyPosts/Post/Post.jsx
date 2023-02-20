import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.img}
        src="https://htmlcolorcodes.com/assets/images/colors/canary-yellow-color-solid-background-1920x1080.png"
        alt=""/>
      {props.message}
      <div><span>{props.likesCount}</span></div>
    </div>
  );
};

export default Post;
