import React from "react";
import  Button from "@material-ui/core/Button";
import useProtectedPage from "../../hooks/useProtectedPage";

const RecipesListPage = () => {

    useProtectedPage()

    return (
        <div>
           <div>RecipesListPage</div>
           <Button variant="contained" color="primary">Primary</Button>
        </div>
    )
}
export default RecipesListPage;