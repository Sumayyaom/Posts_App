const SearchBar = ({ search, setSearch }) => (
  <div className="d-flex justify-content-center mb-4">
    <input className="form-control w-50" type="text" placeholder="Search by title" value={search} onChange={e => setSearch(e.target.value)} />
  </div>
);

export default SearchBar;
