import { ChangeEvent, useState } from "react";
import s from "./user-form.module.css";

export const UserForm = () => {
    const [name, setName] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className={s.form}>
      <h1 className={s.header}>Добавить пользователя:</h1>
      <form className={s.card}>
        <label className={s.label}>
          Ваше имя:
          <input
            className={s.input}
            name="fio"
            type="text"
            value={name ?? ''}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}