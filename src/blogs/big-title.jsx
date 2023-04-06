function BigTitle() {
  return (
    <div className="p-3">
      <div className="inline-grid grid-cols-1">
        <div className="inline-block font-serif font-extrabold lg:text-5xl text-xl z-10">
          “Truth can only be found in one place:
        </div>
        <div className="relative bg-amber-300 lg:h-8 h-3 lg:-top-5 -top-3 lg:left-16 left-8 w-11/12 "></div>
      </div>
      <div className="lg:flex justify-between items-center">
        <div className="inline-grid grid-cols-1">
          <div className="inline-block lg:pl-7 pl-2 font-serif font-extrabold lg:text-5xl text-3xl z-10">
            The code!”
          </div>
          <div className="relative bg-amber-300 lg:h-8 h-4 lg:-top-5 -top-5 lg:left-16 left-8 w-9/12 "></div>
        </div>

        <div className="inline lg:text-xl text-sm">
          Robert C. Martin, Clean Code: A Handbook of Agile Software
          Craftsmanship
        </div>
      </div>
    </div>
  );
}
export default BigTitle;
