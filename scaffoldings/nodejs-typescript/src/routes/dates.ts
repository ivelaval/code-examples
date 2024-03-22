import { Router, Request, Response } from "express"

const routes = Router();

const locale: string | undefined = 'en-us';

const dayNameByLocale: { [key: string]: string[] } | undefined = {
    "en-us": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    "es-us": ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
}

const localeOptions: Intl.DateTimeFormatOptions | undefined = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    // timeZone: 'Australia/Sydney',
    timeZone: 'UTC',
};

const isIsoDate = (str: string): boolean => {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    const d = new Date(str); 
    return d instanceof Date && !isNaN(d.getTime()) && d.toISOString()===str; 
}

const getNumberAsString = (number: number, digits: number = 2): string => {
    return number.toLocaleString(locale, {
      minimumIntegerDigits: digits,
      useGrouping: false
    })
}

const formatDateTime = (dateTime: Date, options: Intl.DateTimeFormatOptions | undefined = localeOptions): string => {
    const dateTimeFormat3 = new Intl.DateTimeFormat(locale, localeOptions as any);
    return dateTimeFormat3.format(dateTime);
}

const getDayOfWeekName = (locale: string, day: number) => {
    if (dayNameByLocale?.[locale]) {
        return dayNameByLocale?.[locale]?.[day];
    }

    return '';
}

const getDates = (req: Request, res: Response) => {
    const dateTimeAsString: string = req.query['dateTime']?.toString() || '2023-06-29T16:45:06.387Z';
    let now: Date;

    if (isIsoDate(dateTimeAsString)) {
        const dateTimeAsStringWithoutMilliseconds = dateTimeAsString.slice(0,-5) + "Z";
        now = new Date(dateTimeAsStringWithoutMilliseconds);
    } else {
        now = new Date();
    }

    const offsetMinutes = now.getTimezoneOffset();
    const localDateTime = new Date(now.getTime() - offsetMinutes * 60 * 1000);
    
    res.send({
        data: {
            UTCDateTimeAsISO: now,
            UTCDateTimeToUTCString: now.toUTCString(),
            UTCDateTimeTolocaleTimezoneAsString: now.toString(),
            UTCDateTimeToDateString: now.toDateString(),
            UTCDateTimeToISOString: now.toISOString(),
            UTCDateTimeToLocaleDateString: now.toLocaleDateString('en-us'),
            UTCDateTimeToLocaleString: now.toLocaleString('en-us'),
            UTCDateTimeToLocaleTimeString: now.toLocaleTimeString('en-us'),
            UTCdayOfMonth: now.getUTCDate(),
            UTCdayOfWeek: getDayOfWeekName(locale, now.getUTCDay()),
            UTCmonth: now.getUTCMonth(),
            UTCyear: now.getUTCFullYear(),
            UTChours: now.getUTCHours(),
            UTCminutes: now.getUTCMinutes(),
            UTCseconds: now.getUTCSeconds(),
            UTCmilliseconds: now.getUTCMilliseconds(),
            timeZoneOffset: offsetMinutes,
            localDateTimeAsISO: localDateTime,
            localDateTimeDayOfMonth: now.getDate(),
            localDateTimeDayOfWeek: getDayOfWeekName(locale, now.getDay()),
            localDateTimeMonth: now.getMonth(),
            localDateTimeYear: now.getFullYear(),
            localDateTimeHours: now.getHours(),
            localDateTimeMinutes: now.getMinutes(),
            localDateTimeSeconds: now.getSeconds(),
            localDateTimeMilliseconds: now.getMilliseconds(), 
        }
    })
}

routes.get('/', getDates);

export { routes }
