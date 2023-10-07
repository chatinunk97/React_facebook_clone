import PostItem from "./PostItem";

export default function PostList({allPost}) {
  return (
    <div className="flex flex-col gap-4 py-4" >
      {allPost.map((el)=>{
        return <PostItem key={el.id} id={el.id} postObj={el}/>
      })}
    </div>
  );
}
