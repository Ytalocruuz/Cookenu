import React from "react";
import useProtectedPage from "../../hooks/useUnprotectedPage";

const RecipeDetailPage = () => {

    useProtectedPage()

    return (
        <div>RecipeDetailPage</div>
    )
}
export default RecipeDetailPage;