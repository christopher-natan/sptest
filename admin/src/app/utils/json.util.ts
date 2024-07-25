interface NestedObject {
    [key: string]: any;
}

export class JsonUtil {
    static flatten = (object: any, parentKey = '') => {
        const content = [];
         Object.keys(object).flatMap((key: string) => {
            const data = {};
            data[key] = object[key];
            content.push(data);
        });
         return content;
    };

}
