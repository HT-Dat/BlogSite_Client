import BigTitle from "./big-title";
import HomePostList from "./home-post-list";
import HomeFooter from "./home-footer";
export default function BlogHome() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg mt-16">
        <BigTitle />

        <div className="flex pt-16">
          <div className="w-9/12 ">
            <HomePostList />
          </div>
          <div className="w-3/12 flex justify-end">
            <div className="flex flex-col">
              <p className="w-fit ml-auto font-medium text-lg ">
                Filter Posts By Tag
              </p>
              <p className="w-fit ml-auto text-sm text-gray-500 pb-3">
                (Not yet working)
              </p>
              <div className="w-fit ml-auto text-mono text-xl py-1 px-2 my-1 border-2 border-black">
                .NET
              </div>
              <div className="w-fit ml-auto text-mono text-xl py-1 px-2 my-1 border-2 border-black">
                DOCKER
              </div>
              <div className="w-fit ml-auto text-mono text-xl py-1 px-2 my-1 border-2 border-black">
                CKEDITOR
              </div>
              <div className="w-fit ml-auto text-mono text-xl py-1 px-2 my-1 border-2 border-black">
                REACT
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}
