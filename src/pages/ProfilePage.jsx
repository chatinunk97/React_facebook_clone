import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";

export default function ProfilePage() {
  return (
    <div className="shadow pb-4 bg-gradient-to-b from-gray-200 to-white">
      <ProfileCover />
      <ProfileInfo />
    </div>
  );
}
