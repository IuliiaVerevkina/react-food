import { Link } from "react-router-dom"
const CategoryItem = (props) => {
	const { strCategory, strCategoryThumb, strCategoryDescription } = props;
	return (
		<div className="card">
			<img alt={strCategory} src={strCategoryThumb}/>
			<div className="card-descr">
				<div className="card-name">{strCategory}</div>
				<p className="card-text">{strCategoryDescription.slice(0, 150)}...</p>
				<div><Link className="btn" to={`/category/${strCategory}`}>view category</Link></div>
			</div>
		</div>
	)
}
export { CategoryItem }