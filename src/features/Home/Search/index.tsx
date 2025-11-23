import './Search.css';
import Results from './Results';
import Input from "./Input";
import Filters from "./Filters";



export default function () {





  return (
    <div class="search">
      <form class="superInputContainer">
        <Input />
        <Filters />
      </form>
      <Results />
    </div>
  );
}
