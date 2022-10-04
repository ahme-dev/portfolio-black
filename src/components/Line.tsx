import "virtual:windi.css";

function Line(props: any) {
  return (
    <div id="line" className="scale-x-40 flex flex-col items-end">
      <h1 className="text-5xl my-6">{props.title}</h1>
      {props.items.map((item: string) => (
        <p className="text-3xl hover:text-shadow-md my-2">{item}</p>
      ))}
    </div>
  );
}

export default Line;
