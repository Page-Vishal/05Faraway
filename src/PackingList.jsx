import { useState } from "react";

export default function PackingList ( {items, onDeleteItem,onToggleItem,onCLearList} ) {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems;
    if (sortBy === 'input') {
        sortedItems = items;
    } else if (sortBy === 'description') {
        sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
    } else if (sortBy === 'packed') {
        sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
    }

    return ( 
        <div className="list">
        <ul>
            {sortedItems.map((item) => (
                <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} onCLearList={onCLearList}/>
            ))}
        </ul>
        <div className="actions">
            <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
                <option value='input'>Sort by Input Order</option>
                <option value='description'>Sort by Description</option>
                <option value='packed'>Sort by Packed Status</option>
            </select>
            <button onClick={onCLearList}>Clear List</button>
        </div>
        </div>
    );
} 

function Item({item,onDeleteItem,onToggleItem}) {

    return <li>
        <input type='checkbox' value={item.packed} onChange={() => {onToggleItem(item.id)}}/>
        <span style={item.packed ? {textDecoration:'line-through'} : {}}>
            {item.quantity} {item.description}
        </span>
        <button onClick={()=>onDeleteItem(item.id)}>❌</button>
        </li>
}





// export default function PackingList ( {initialItems} ) {
//     return ( 
//         <div className="list">
//         <ul>
//             {initialItems.map((item) => (
//                 <Item item={item} key={item.id}/>
//             ))}
//         </ul>
//         </div>
//     );
// }

// function Item({item}) {
//     return <li>
//         <span style={item.packed ? {textDecoration:'line-through'} : {}}>
//             {item.quantity} {item.description}
//         </span>
//         <button>❌</button>
//         </li>
// }