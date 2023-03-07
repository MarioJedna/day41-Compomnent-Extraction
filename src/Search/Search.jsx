export default function Search() {
  return (
    <nav className="filter">
      <label htmlFor="filter">Filter</label>
      <input
        type="text"
        name="filter"
        id="filter"
        placeholder="enter search term"
      />
    </nav>
  );
}
