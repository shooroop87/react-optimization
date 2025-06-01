import { TUser, TUsers } from "./types";

const users: Array<TUser> = [
    { id: Math.random(), fio: "Андрей Иванов" },
    { id: Math.random(), fio: "Евгений Петров" },
    { id: Math.random(), fio: "Виталий Кузнецов" },
];

export const loadUsers = (): Promise<TUsers> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({ users })
        }, 2000)
    });

export const addUser = (fio: string)  =>
    new Promise((resolve) => {
        setTimeout(() => {
            users.push({id: Math.random(), fio });
            resolve({ ok: true })
        }, 0)
    });