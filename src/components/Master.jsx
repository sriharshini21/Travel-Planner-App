import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from "./Login";
import Registration from './Registration';

const Master=()=>{

    return(
    <>

    <BrowserRouter>
   <Routes>
    <Route path ="/" element = {<Login></Login>}></Route>
    <Route path='/register' element ={<Registration></Registration>}>
    </Route>
    </Routes>

    </BrowserRouter>
    </>

    )

}
export default Master;