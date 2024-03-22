import { Router }  from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const dynamicRoutes = Router();

const cleanFileName = (fileName: string): string | undefined  => {
    return fileName.split('.').shift();
}

const contains = (value: string, subvalue: string) => {
    return value.indexOf(subvalue) > -1;
}

readdirSync(PATH_ROUTER).filter((file) => {
    if (!contains(file, 'index') && !contains(file, '.map')) {
        const cleanName = cleanFileName(file); 
        import(`./${cleanName}.js`).then((module) => {
            dynamicRoutes.use(`/${cleanName}`, module.routes);
        });
    }
});

export { dynamicRoutes };
