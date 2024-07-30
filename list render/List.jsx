function List() {

    const fruits = [{id: 1,name:'apple', calories:95}, 
                    {id: 2,name:'banana', calories:105}, 
                    {id: 3,name:'cherry', calories:77}, 
                    {id: 4,name:'grape', calories:62},];

    const listItem = fruits.map(fruit => <li key={fruit.id}>
                                           {fruit.name.toUpperCase()}: &nbsp;
                                            <b>{fruit.calories}</b></li>);

    // Sort the fruits by name
    //fruits.sort((a, b) => a.name.localeCompare(b.name));

    // Sort the fruits by name in descending order
    //fruits.sort((a, b) => b.name.localeCompare(a.name));

    // Sort the fruits by calories
    // fruits.sort((a,b) => a.calories - b.calories);

    //for decending order change the order of a and b
    // fruits.sort((a,b) => b.calories - a.calories);

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);



    const lowCalItem = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                            {lowCalFruit.name.toUpperCase()}: &nbsp;
                                                            <b>{lowCalFruit.calories}</b></li>)


    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const highCalItem = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                                            {highCalFruit.name.toUpperCase()}: &nbsp;
                                                            <b>{highCalFruit.calories}</b></li>)

    return(
        <>
            <ol>{listItem}</ol>
            <ol>{lowCalItem}</ol>
            <ol>{highCalItem}</ol>
        </>
    );
}

export default List