import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { MealList } from "../components/mealList";
import arrow from "../resources/img/arrow.png";
const Category = () => {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		getFilteredCategory(name).then(data => (
			setMeals(data.meals)
		));

	}, [name]);

	return (
		<div className="container">
		<button className="go-back" onClick={() => { navigate(-1) }}><img src={arrow} alt={arrow} /></button>
			<MealList meals={meals} />
		</div>

	)
};
export { Category };