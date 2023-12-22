import FilterableProductTable from './components/FilterableProductTable';
import './App.css';
import { people, PRODUCTS } from './data/data';
import { getImageUrl } from './utils/utils';
import PeopleList from './components/PeopleList'
import Recipes from './components/Recipes';
import Poem from './components/Poem';

function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = (
      <del>
        {name} + 'tik'
      </del>
    )
  }
  return <li className='item'>{itemContent}</li>
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FilterableProductTable products={PRODUCTS} />
      </header>
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item
            isPacked={true}
            name="Space suit"
          />
          <Item
            isPacked={true}
            name="Helmet"
          />
          <Item
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
      <PeopleList people={people} getImageUrl={getImageUrl} />
      <Recipes />
      <Poem />
    </div>
  );
}




export default App;
