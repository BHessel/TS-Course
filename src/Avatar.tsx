export const FALLBACK_AVATAR_URL = "https://cataas.com/cat/says/hello%20world!";
export const FALLBACK_AVATAR_ALT_TEXT = "@hello-cat";

type AvatarProps = {
  url?: string;
  alt?: string;
};

function Avatar({
  url = FALLBACK_AVATAR_URL,
  alt = FALLBACK_AVATAR_ALT_TEXT,
}: AvatarProps) {
  return (
    <img
      src={url}
      alt={alt}
      onError={() => console.log("TODO - implement me")}
    />
  );
}

export default Avatar;
