import { recipes } from "../data/data";


const Recipes = () => {

    return (
        <div>
            <h1>Recipes</h1>
            {
                recipes.map(recipe =>
                    <div key={recipe.id}>
                        <h2>{recipe.name}</h2>
                        <ul>
                            {recipe.ingredients.map(ingredient=>
                               <li key={ingredient}>
{ingredient}
                               </li>
                               
                                )}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}


export default Recipes;