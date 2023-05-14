
import { CategoryItem } from "./categoryItem";
const CategoryList = ({ catalog = [] }) => {
	return (
		<div className="list">
			{catalog.map(element => (
				<CategoryItem key={element.idCategory} {...element} />
			))}
		</div>
	)
};
export { CategoryList };