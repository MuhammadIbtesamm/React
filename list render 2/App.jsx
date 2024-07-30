import List from './List'
function App () {
  const fruits = [{id: 1,name:'apple', calories:95}, 
                  {id: 2,name:'banana', calories:105}, 
                  {id: 3,name:'cherry', calories:77}, 
                  {id: 4,name:'grape', calories:62},];

  const vegetables = [{id: 5,name:'potatoes', calories:110}, 
                      {id: 6,name:'celery', calories:15}, 
                      {id: 7,name:'carrot', calories:25}, 
                      {id: 8,name:'corn', calories:63},];
  return(
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );
}

export default App