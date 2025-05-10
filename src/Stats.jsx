export default function Stats ({items}) {
    if (!items.length) 
        return (
        <p className="stats">
            <em>Start by adding some items in the list.😀</em>
        </p>);

    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const perPacked = Math.round((numPacked / numItems) * 100);
    return (
        <footer className="stats">
            <em>
                {perPacked === 100  ? "You got everything packed! ✈️" : 
                `You have ${numItems} items on your List, and you have already packed ${numPacked} (${perPacked}%)`}
            </em>
        </footer>
    );
}