export default function Header() {
  return (
    <div className="mb-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-end">
          <div className="flex flex-row">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4">
              Most Votes
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Latest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
