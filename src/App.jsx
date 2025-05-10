import "./App.css";
import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";
import { useState } from "react";
// import { initialItems } from "./items.js"

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems (item) {
    setItems(items => [...items, item]);
  }

  function handleDeleteItem(id){
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id? {...item, packed: !item.packed} : item));
  }

  function handleClearList() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) setItems([]);
  }

  return <div className="app">
    <Logo />
    <Form onAddItems={handleAddItems}/>
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onCLearList={handleClearList}/>
    <Stats items={items}/>
  </div>
}