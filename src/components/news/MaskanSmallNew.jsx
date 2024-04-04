function MaskanSmallNew() {
  return (
    <div className="flex flex-col justify-between rounded-lg border  border-gray-200">
      <img
        className="h-56 rounded-t-lg object-cover"
        src="src\assets\imgs\Photo-news.svg"
        alt=""
      />
      <span className="w-fit rounded-md bg-slate-100 p-1 px-2  text-xs sm:text-base">
        زمان مطالعه 5 دقیقه
      </span>
      <span className="px-2 text-justify  text-xs  sm:text-base">
        فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ فروشندگان
      </span>
    </div>
  );
}

export default MaskanSmallNew;