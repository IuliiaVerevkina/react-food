import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

import { getAllCategories } from "../api";
import { CategoryList } from "../components/categoryList";
import { Search } from "../components/search";

import imgDown from "../resources/img/down.png"

const HomePage = () => {
	const [catalog, setCatalog] = useState([]);
	const [value, setValue] = useState("");
	//const [filteredCatalog, setFilteredCatalog] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const postQuery = searchParams.get("search") || '';

	const handleSearch = (catalog, value) => {
		if (value.length === 0) {
			return catalog;
		};
		
		return catalog.filter(item => {
			return item.strCategory.toLowerCase().includes(value.toLowerCase());
		})
	}

	const onUpdateSearch = (value) => {
		setSearchParams({ search: `${value}` });
		setValue(value);
	};

	useEffect(() => {
		getAllCategories().then((data) => {
			setCatalog(postQuery 
				? data.categories.filter(item => 
					item.strCategory.toLowerCase().includes(postQuery)) 
				: data.categories);
		})
	}, [postQuery]);

	const visibleData = handleSearch(catalog, value);
	return (
		<>
			<div className="main">
				<div className="main-header">
					<h1>Food recipes</h1>
					<h2>
						Why stay hungry when You can cook according to our
						recipe
					</h2>
					<div>Start choosing a recipe right now.</div>
					<img src={imgDown} alt="down" className="down" />
					<Search onUpdateSearch={onUpdateSearch} />
				</div>
				<div className="container">
					<CategoryList catalog={visibleData} />
				</div>
			</div>
		</>

	);
}
export { HomePage }