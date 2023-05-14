import { useState } from "react";

const Search = (props) => {
	const [value, setValue] = useState("");

	const onHandleSubmit = () => {
		props.onUpdateSearch(value);
	}

	const onUpdateSearch = (e) => {
		const value = e.target.value.toLowerCase();
		setValue(value);
		props.onUpdateSearch(value);
	}

	const onHandleKey = (e) => {
		if (e.key === "Enter") {
			onHandleSubmit();
		}
	};

	return (
		<div className="search">
			<input
				required
				type="search"
				placeholder="Search"
				onKeyDown={onHandleKey}
				onChange={onUpdateSearch}
				value={value} />
			<button className="btn" onClick={onHandleSubmit}>Search</button>
		</div>
	)

}
export { Search };