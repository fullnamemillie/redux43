import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://htmlcolorcodes.com/assets/images/colors/navy-blue-color-solid-background-1920x1080.png" />
      </div>
      <div className={s.description}>ava + descriptrion</div>
    </div>
  );
};

export default ProfileInfo;
