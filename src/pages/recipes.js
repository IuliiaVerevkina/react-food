import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getMealById } from "../api";
import arrow from "../resources/img/arrow.png";
const Recipes = () => {

	const { id } = useParams();
	const [recipe, setRecipe] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		getMealById(id).then(data => (
			setRecipe(data.meals[0])
		));

	}, [id]);
	const { strMeal, strMealThumb, strInstructions, strCategory, strArea, strTags, strYoutube, } = recipe;
	return (
		<div className="container">
			<button className="go-back" onClick={() => { navigate(-1) }}><img src={arrow} alt={arrow} /></button>
			<div className="resipe">
				<div className="resipe-wrapper">
					<img src={strMealThumb} alt={strMeal} />
					<div className="resipe-descr">
						<h2>{strMeal}</h2>
						<h4>Category:  <span>{strCategory}</span></h4>
						{strArea ? <h4> Country of origin : <span>{strArea}</span> </h4> : null}
						<span className="tag">{strTags ? `#${strTags}` : null}</span>
					</div>
					<table className="resipe-table">
						<thead>
							<tr>
								<th>Ingredient</th>
								<th>Measure</th>
							</tr>
						</thead>
						<tbody>
							{
								Object.keys(recipe).map(key => {
									if (key.includes("Ingredient") && recipe[key]) {
										return (
											<tr key={key}>
												<td className="ingredient">{recipe[key]}:</td>
												<td className="measure">{
													recipe[`strMeasure${key.slice(13)}`]
												}</td>
											</tr>
										);
									};
									return null;
								})
							}
						</tbody>
					</table>
					<p className="resipe-instructions">
						{strInstructions}
					</p>
					<div className="resipe-video">
						{
							strYoutube ? <iframe title={strMeal} src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> : null
						}
					</div>
				</div>
			</div>
		</div>
	)
}
export { Recipes };