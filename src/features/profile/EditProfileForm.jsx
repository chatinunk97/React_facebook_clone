import PictureForm from "./PictureForm";
import Avatar from "../../components/Avatar";
import CoverImage from "../../features/profile/CoverImage";

export default function EditProfileForm() {
  return (
    <div className="flex flex-col gap-5">
      <PictureForm title="Profile picture">
        {(src, onClick) => (
          <Avatar className="h-40" src={src} onClick={onClick} />
        )}
      </PictureForm>
      <PictureForm title="Cover photo">
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
