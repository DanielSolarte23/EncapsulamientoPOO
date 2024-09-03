import  db  from "../config/db.js";

export async function getAllDepartamentos() {
    try {
        const [resuls] = await db.query('select * from Departamentos')
        return resuls
        console.log("Este es el metodo getalldepartamentos" + resuls);

    } catch (error) {
        console.log(`Error ${error}`);

    }
};

export function addDepartamento() {
    try {
        console.log("Este es el metodo addDepartamento");

    } catch (error) {
        console.log(error);

    }
}

export function updateDepartamento() {
    try {
        console.log("Este es el metodo updateDepartamento");

    } catch (error) {
        console.log(error);

    }
}

export function deleteDepartamento() {
    try {
        console.log("Este es el metodo deleteDepartamento");

    } catch (error) {
        console.log(error);

    }
}