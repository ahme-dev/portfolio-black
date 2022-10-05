import "virtual:windi.css";

function Line(props: any) {
  return (
    <div id="line" className="scale-x-40 flex flex-col items-end">
      <h1 id="line-title" className="text-5xl my-6 text-bold">
        {props.title}
      </h1>
      {props.items.map((item: string) => (
        <p className="text-3xl hover:(text-light-50 cursor-pointer border-l-light-300 border-l-2) my-2 px-3">
          {item}
        </p>
      ))}
    </div>
  );
}

export default Line;
