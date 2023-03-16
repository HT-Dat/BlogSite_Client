function BigTitle() {
  return (
    <>
      <div className="inline-grid grid-cols-1">
        <div className="inline-block font-serif font-extrabold text-6xl z-10">
          “Truth can only be found in one place:
        </div>
        <div className="relative bg-amber-300 h-10 -top-7 left-16 w-11/12 "></div>
      </div>
      <div className="flex justify-between items-end">
        <div className="inline-grid grid-cols-1">
          <div className="inline-block pl-7 font-serif font-extrabold text-6xl z-10">
            The code!”
          </div>
          <div className="relative bg-amber-300 h-10 -top-7 left-16 w-9/12 "></div>
        </div>

        <div className="inline-block text-xl">
          Robert C. Martin, Clean Code: A Handbook of Agile Software
          Craftsmanship
        </div>
      </div>
    </>
  );
}
export default BigTitle;
