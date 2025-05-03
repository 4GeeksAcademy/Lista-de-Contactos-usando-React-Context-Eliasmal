import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import  Home  from "./pages/Home";
import ContactForm from "./components/AddContact";
import  EditContact  from "./components/EditContact";



export const router = createBrowserRouter(
    createRoutesFromElements(
   
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        <Route path= "/" element={<Home />} />
        <Route path="/addContact" element={ <ContactForm />} />
        <Route path="/edit/:id" element={ <EditContact />} />
      </Route>
    )
);