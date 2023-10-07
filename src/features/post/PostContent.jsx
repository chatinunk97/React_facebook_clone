export default function PostContent({ message, image }) {
  return (
    <div className="flex flex-col py-2 gap-4">
      {message && <span className="text-sm">{message}</span>}

      {image && (
        <div className="-mx-4">
          <img src={image} alt="contentPic" />
        </div>
      )}
    </div>
  );
}
