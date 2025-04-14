export default function SearchBox ({filter, handleChange}) {
    return (
        <div>
        <label htmlFor="filter">Find contacts by name</label>
        <input type="text" name="filter" id="filter" value={filter} onChange={handleChange}/>
        </div>
    )
}