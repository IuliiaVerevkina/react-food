import { Link } from "react-router-dom";
const MealItem = (props) => {
	const { strMeal, strMealThumb, idMeal } = props;
	return (
		<div className="meal-item">
			<Link to={`/meal/${idMeal}`} className="meal-name">
				<img alt={strMeal} src={strMealThumb} />
				<div className="meal-name">{strMeal}</div>
			</Link>
		</div>
	)
};
export { MealItem }