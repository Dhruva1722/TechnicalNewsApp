import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";
import "./App.css";
import './blurbg.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () =>{

  return (
    <>
   
   <div className="blur-background">

    <Search />
    <Stories/>
    
    <Pagination/>
    </div>
  </>
  );
};
export default App;
