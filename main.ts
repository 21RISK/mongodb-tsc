import {Db} from 'mongodb';

interface Users {
    name: string;
    age: number;
}


export default async function () {
    const db = {} as any as Db; // Let's just simulate a connection to the db

    const col = db.collection<Users>('users');

    col.findOne({name: 432}); // <== No overload matches this call.

    col.findOne({notThere: 1123}) // <== Typescript is totally fine with this
}