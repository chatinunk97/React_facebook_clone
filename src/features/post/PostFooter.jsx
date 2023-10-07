import { ThumbsUpIcon } from "../../icons/icons";
import { ThumbsUpAltIcon } from "../../icons/icons";
import { MessageIcon } from "../../icons/icons";
import ActionButton from "./ActionButton";
import { useAuth } from "../../hook/use-auth";
import axios from "../../config/axios";
import { useState , useEffect } from "react";
export default function PostFooter({ totalLike, id, likeUser }) {
  const { authUser } = useAuth();
  const foundIndex = likeUser.find((el) => el.userId === authUser.id);
  const [isLike, setLike] = useState(false);
  const [likeCount , setLikeCout] = useState(0)
  useEffect(() => {
    if (foundIndex) {
      setLike(true);
    }
    setLikeCout(totalLike)
  }, []);
  const handleLikeClitk = async () => {
    try {
      const result = await axios.post(`/post/${id}/like`);
      setLike(!isLike)
      if(result.data.message){
        setLikeCout(likeCount+1)

      }
      else{
        setLikeCout(likeCount-1)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center py-2">
        <div className="flex justify-center items-center gap-1">
          {likeCount > 0 && (
            <>
              <div className="bg-blue-500 rounded-full flex items-center justify-center h-5 w-5">
                <ThumbsUpIcon />
              </div>
              <span className="text-sm text-gray-500">{likeCount}Likes</span>
            </>
          )}
        </div>

        <span className="text-sm text-gray-500 hover:underline cursor-pointer">
          8 Comments
        </span>
      </div>
      <hr />
      <div className="flex gap-1 py-1">
        <ActionButton>
          <div className="flex justify-center gap-3" onClick={handleLikeClitk}>
            <ThumbsUpAltIcon
              className={`${isLike ? "fill-blue-500" : "fill-gray-500"}`}
            />
            <span className={`${isLike ? "text-blue-500" : ""}`}>Like</span>
          </div>
        </ActionButton>
        <ActionButton>
          <div className="flex justify-center gap-3">
            <MessageIcon className={"fill-gray-500"} />
            <span>Comment</span>
          </div>
        </ActionButton>
      </div>
    </div>
  );
}
