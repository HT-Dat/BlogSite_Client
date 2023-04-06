export default function EditorSidebar({ onPermalinkChange, permaLink }) {
  function handleChange(event) {
    const value = event.target.value;
    onPermalinkChange(value);
  }
  return (
    <div className="w-72 bg-white">
      <div className="p-3">
        <div className="text-gray-600 text-lg">Post setting</div>
        <div className="pl-2">
          <div className="my-2">
            <div>
              <label
                htmlFor="tags"
                className="block mb-2 text-sm text-gray-600 dark:text-white"
              >
                Tags
              </label>
              <textarea
                id="tags"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter tags here, separated by comma"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-start py-5">
            <div className="h-[1px] w-52 bg-gray-300"></div>
          </div>
          <div className="my-2">
            <div>
              <label
                htmlFor="tags"
                className="block mb-2 text-sm text-gray-600 dark:text-white"
              >
                Permalink
              </label>
              <input
                className="focus:outline-none border-b focus:border-b-2 border-yellow-400 text-sm"
                placeholder="Automatic if leave empty"
                onChange={handleChange}
                value={permaLink}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
