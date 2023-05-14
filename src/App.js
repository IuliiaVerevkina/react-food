import { Route, Routes } from "react-router-dom";

import { Layout } from "./pages/layout";
import {HomePage} from "./pages/home-page";
import { Category } from "./pages/category";
import { Recipes } from "./pages/recipes";
function App() {
      return (
            <>
                  <Routes>
                        <Route path="/" element={<Layout />}>
                              <Route index element={<HomePage />} />
					<Route path="category/:name" element={<Category/>}/>
					<Route path="meal/:id" element={<Recipes />} />
                        </Route>
                  </Routes>
            </>
      );
}

export default App;
