import { Suspense, useState } from "react";
import s from "./home.module.css";
import { Await, Link, useLoaderData } from "react-router-dom";
import { TUser, TUsers } from "../../utils/types";

export const Home = () => {
  const data = useLoaderData() as {data: TUsers};

  return (
    <Suspense fallback={<h1>Загрузка...</h1>}>
      <Await
        resolve={data.data}
        errorElement={<p>Не удалось загрузить список пользователей.</p>}
      >
        {({users}: TUsers) => (
          <section className={s.page}>
            <h1>Пользователи:</h1>
            <table className={s.table}>
              <thead>
                <tr>
                  <th className={s.table__cell}>ФИО</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className={s.table__cell}>{user.fio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link to="/user/add">
              <button>Добавить</button>
            </Link>
          </section>
        )}
      </Await>
    </Suspense>
  );
};