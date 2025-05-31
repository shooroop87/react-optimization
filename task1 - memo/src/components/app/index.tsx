import { updateWidth } from "../../utils/utils";
import Items from "../items";
import RapidButton from "../rapid-button";
import s from "./app.module.css";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

export const App = () => {
  const [name, setName] = useState("");
  const [itemWidth, setItemWidth] = useState(1);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleItemWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemWidth(Number(e.target.value));
    updateWidth();
  };

  const handleRapidChange = () => {
    if (itemWidth <= 3) {
      setItemWidth(4.5);
    } else {
      setItemWidth(1);
    }
    
    updateWidth();
  };

  const items = [
    { flex: itemWidth, background: `#213547` },
    { flex: 1, background: "peru" },
    { flex: 3, background: "tomato" },
  ];

  return (
    <div className={s.page}>
      <Items items={items} />
      <section className={s.card}>
        <label htmlFor="name">Название</label>
        <input
          className={s.input}
          id="name"
          type="text"
          value={name ?? ""}
          onChange={handleNameChange}
        />
        <label htmlFor="first-item-width">Ширина первого элемента:</label>
        <input
          id="first-item-width"
          type="range"
          min={1}
          max={5}
          step={0.01}
          value={itemWidth}
          onChange={handleItemWidthChange}
        />
        <RapidButton onClick={handleRapidChange} />
      </section>
    </div>
  );
};