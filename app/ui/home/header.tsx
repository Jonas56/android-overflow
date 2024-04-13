export default function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-row justify-between mb-24">
      <div>
        <h1 className="lg:text-4xl text-2xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h1>
        <p className="mt-4 mx-auto text-base text-gray-500">{description}</p>
      </div>
      <div className="flex justify-end">
        <a href="/#" className="text-blue-500 text-xl pr-10">
          Most Votes
        </a>
        <a href="/#" className="text-blue-500 text-xl">
          Latest
        </a>
      </div>
    </div>
  );
}
