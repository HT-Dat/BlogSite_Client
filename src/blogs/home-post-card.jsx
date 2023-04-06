import { Link } from "react-router-dom";
export default function HomePostCard({
  title,
  preview,
  publishedDate,
  authorName,
  authorImgUrl,
  permaLink,
  thumbnailUrl,
}) {
  return (
    <div className="flex py-10 z-50">
      <div className="w-20">
        <div className="min-w-fit">
          <img
            src={authorImgUrl}
            className="h-16 w-16 bg-white rounded-full border-2"
            referrerPolicy="no-referrer"
          ></img>
        </div>
      </div>
      <div className="w-full pl-4 pt-1">
        <Link
          to={permaLink}
          className="text-xl font-bold hover:text-blue-600 hover:underline"
        >
          {title}
        </Link>
        <div className="flex py-2">
          <p>Posted by {authorName}</p>
        </div>
        <Link to={permaLink}>
          <img src={thumbnailUrl} className="h-48 w-full object-cover"></img>
        </Link>

        <div className="ml-4 -mt-6 absolute border-2 border-black">
          <p className="p-1 bg-amber-300">
            {(() => {
              var options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              };

              let date = new Date(publishedDate + "Z");
              return date.toLocaleDateString("en-US", options);
            })()}
          </p>
        </div>
        <div className="pt-8">
          <div className="text-xl font-serif">
            {preview}
            <span className="inline-block pl-4">
              <div className="inline-grid grid-cols-1">
                <Link
                  className="font-sans font-bold z-10 uppercase hover:text-blue-600 hover:underline"
                  to={permaLink}
                >
                  Read full article
                </Link>
                <div className="relative bg-amber-300 h-4 -top-3 left-4"></div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
