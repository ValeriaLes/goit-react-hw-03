import css from "./SearchBox.module.css"

export default function SearchBox ({filter, handleChange}) {
    return (
        <div className={css.searchWrapper}>
        <label htmlFor="filter" className={css.label}>Find contacts by name</label>
        <input type="text" name="filter" id="filter" value={filter} onChange={handleChange} className={css.input}/>
        </div>
    )
}