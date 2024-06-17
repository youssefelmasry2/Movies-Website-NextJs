import NavBarItems from "./NavBarItems";

export default function NavBar() {
  return (
    <div className="flex gap-6 dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center">
      <NavBarItems title="Trending" param="fetchTrending"/>
      <NavBarItems title="Top Rated" param="fetchTopRated"/>
    </div>
  );
}
