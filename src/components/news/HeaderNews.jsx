function HeaderNews({ title, subtitle, time, created_at }) {
  return (
    <div className="flex  flex-col items-center  ">
      <div className="mb-5 flex w-[85%] flex-col gap-2">
        <div className="flex flex-col">
          <span className="text-xl font-bold">{title}</span>
          <span className="text-base font-semibold">{subtitle}</span>
        </div>
        <div className="flex gap-5  ">
          <span className="w-fit rounded-md bg-slate-100 p-1 text-sm">
            {time}
          </span>
          <div className="flex w-fit flex-wrap items-center justify-center rounded-md bg-gray-100 p-1">
            <span className="text-sm">{created_at}</span>
            <img src="src\assets\icons\calendar.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex  justify-center">
        <img className="w-[85%]" src="src\assets\imgs\new-photo3.svg" alt="" />
      </div>
    </div>
  );
}

export default HeaderNews;