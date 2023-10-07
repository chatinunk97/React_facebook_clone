import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
export default function PostItem({postObj : {message,image,user,createdAt,totalLike,likes},id}) {

  return (
    <div className="bg-white px-4 py-3 border shadow rounded-lg">
      <PostHeader user={user} createdAt={createdAt}/>
      <PostContent message={message} image = {image}  />
      <PostFooter totalLike={totalLike} id={id} likeUser = {likes}/>
    </div>
  );
}
