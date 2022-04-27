import UserProfileForm from "./UserProfileForm";
import classes from "./UserProfile.module.css";
const UserProfile = () => {
  return (
    <div>
      <h3 className={classes.welcomeTxt}>Welcome to Your Profile</h3>
      <UserProfileForm />
    </div>
  );
};

export default UserProfile;
