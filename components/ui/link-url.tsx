"use client";
import { useRouter } from "next/navigation";

interface LinkUrlProps {
  title: string;
  route: string;
}

const LinkUrl = (props: LinkUrlProps) => {
  const { title, route } = props;

  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`${route}`)}
      className="font-light text-sm text-slate-300 cursor-pointer hover:underline"
    >
      {title}
    </button>
  );
};

export default LinkUrl;
