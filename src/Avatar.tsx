import { useState } from "react";

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
  const [srcToRender, setSrcToRender] = useState(url);

  return (
    <img
      src={srcToRender}
      alt={alt}
      onError={() => setSrcToRender(FALLBACK_AVATAR_URL)}
    />
  );
}

export default Avatar;
