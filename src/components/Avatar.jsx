import defaultImage from "../assets/defaultProfile.png";

export default function Avatar({ className = "h-10"  , src}) {
  const defaultClass = "rounded-full aspect-square";
  const classes = defaultClass + " " + className;
  return (
    <img
      src={src ? src :  defaultImage}
      alt="user" 
      className={classes}
    />
  );
}
