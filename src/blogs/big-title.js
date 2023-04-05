function BigTitle() {
  return (
    <div className="p-3">
      <div className="inline-grid grid-cols-1">
        <div className="inline-block font-serif font-extrabold lg:text-6xl text-xl z-10">
          “Truth can only be found in one place:
        </div>
        <div className="relative bg-amber-300 lg:h-10 h-3 lg:-top-7 -top-3 lg:left-16 left-8 w-11/12 "></div>
      </div>
      <div className="lg:flex justify-between items-end">
        <div className="inline-grid grid-cols-1">
          <div className="inline-block lg:pl-7 pl-2 font-serif font-extrabold lg:text-6xl text-3xl z-10">
            The code!”
          </div>
          <div className="relative bg-amber-300 lg:h-10 h-4 lg:-top-7 -top-5 lg:left-16 left-8 w-9/12 "></div>
        </div>

        <div className="inline-block lg:text-xl text-sm">
          Robert C. Martin, Clean Code: A Handbook of Agile Software
          Craftsmanship
        </div>
      </div>
    </div>
  );
}
export default BigTitle;
