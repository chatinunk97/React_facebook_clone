import PictureForm from "./PictureForm";
import Avatar from "../../components/Avatar";
import CoverImage from "../../features/profile/CoverImage";
import { useAuth } from "../../hook/use-auth";
import { useState } from "react";
import Loading from "../../components/Loading";

export default function EditProfileForm({ onSuccess }) {
  const { authUser, updateProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const uploadProfileImage = async (input) => {
    try {
      const formData = new FormData();
      formData.append("profileImage", input);
      setLoading(true);
      await updateProfile(formData);
      onSuccess();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const uploadCoverImage = async (input) => {
    try {
      const formData = new FormData();
      formData.append("coverImage", input);
      setLoading(true);
      await updateProfile(formData);
      onSuccess();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-5">
      {loading && <Loading />}
      <PictureForm
        title="Profile picture"
        initialSrc={authUser.profileImg}
        onSave={uploadProfileImage}
      >
        {(src, onClick) => (
          <div onClick={onClick}>
            <Avatar className="h-40" src={src} onClick={onClick} />
          </div>
        )}
      </PictureForm>
      <PictureForm
        title="Cover photo"
        initialSrc={authUser.coverImg}
        onSave={uploadCoverImage}
      >
        {(src, onClick) => (
          <div
            className="aspect-[3/1] overflow-hidden rounded-md flex items-center justify-center "
            onClick={onClick}
          >
            <CoverImage src={src} />
          </div>
        )}
      </PictureForm>
    </div>
  );
}
