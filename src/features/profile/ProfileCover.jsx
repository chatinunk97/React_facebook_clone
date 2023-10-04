import CoverImage from "./CoverImage";
import { useAuth } from "../../hook/use-auth";
export default function ProfileCover({src}) {
  return (
    <div className="max-w-6xl max-h-96 overflow-hidden mx-auto rounded-b-lg flex justify-center items-center">
      <CoverImage src={src}/>
    </div>
  );
}
