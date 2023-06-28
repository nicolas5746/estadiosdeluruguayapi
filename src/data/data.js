import departamentos from '../models/departamentos.js';
import estadios from '../models/estadios.js';

export const getDepartamentos = (req, res) => {
    res.json(departamentos);
}

export const getEstadios = (req, res) => {
    const filters = req.query;
    const values = Object.values(estadios);
    const filtered = values.filter((event) => {
        let exists = true;
        for (let key in filters) {
            exists = exists && event[key] == filters[key];
        }
        return exists;
    });
    res.json(filtered);
}