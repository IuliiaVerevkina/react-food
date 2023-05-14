import { MealItem } from "./mealItem";

const MealList = ({ meals = [] }) => {

	return (
		<div className="meal">
			{meals.map(el => (
				<MealItem key={el.idMeal} {...el} />
			))}
		</div>
	)
};
export { MealList };