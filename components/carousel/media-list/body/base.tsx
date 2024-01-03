import Link from "next/link";

export default function BodyCarouselBase({
  title,
  children,
  link,
}: {
  title: React.ReactNode | string;
  children: React.ReactNode;
  link?: string;
}) {
  return (
    <div className="container w-full max-w-screen-2xl space-y-1 sm:space-y-2.5">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-white/90 transition-colors hover:text-white sm:text-xl ">
            {title}
          </h2>
        {link && (
          <Link
            href={link}
            className="text-sm text-blue-500 font-semibold"
          >
            Explore More
          </Link>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}