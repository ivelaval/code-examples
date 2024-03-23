import { type RequestHandler, Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const dynamicRoutes = Router();

const cleanFileName = (fileName: string): string | undefined => {
  return fileName.split('.').shift();
};

const contains = (value: string, subvalue: string): boolean => {
  return value.includes(subvalue);
};

readdirSync(PATH_ROUTER).filter((file): string => {
  if (!contains(file, 'index') && !contains(file, '.map')) {
    const cleanName = cleanFileName(file);

    void import(`./${cleanName}.js`).then((module) => {
      dynamicRoutes.use(
        `/${cleanName}`,
        module.routes as RequestHandler<any, any, any, any, Record<string, any>>
      );
    });
  }

  return file;
});

export { dynamicRoutes };
