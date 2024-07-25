import {startCase} from "lodash";

export class AppUtil {

    static isNumber = (value: any): boolean => {
        if (typeof value === 'number' && !isNaN(value)) {
            if (Number.isInteger(value)) return true;
            return true;
        }
        return false;
    }

    static createCode(length: number = 6): string {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const ids = new Set<string>();
        const generate = (length: number) => {
            let result = '';
            const charsetLength = charset.length;
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charsetLength);
                result += charset[randomIndex];
            }
            return result;
        }

        while (ids.size < length) {
            ids.add(generate(length));
        }
        return Array.from(ids)[0];
    }

    static hideScrollbar(hide: boolean) {
        if (hide) {
            document.body.classList.add('no-scrollbar');
        } else {
            document.body.classList.remove('no-scrollbar');
        }
    }

    static findIndexById = (items: any, id: string): number => {
        let index = -1;
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    static jsonToHtml = (json: any, isInner: boolean = false): string => {
        if (typeof json === 'string' || typeof json === 'number' || typeof json === 'boolean') {
            return `<div class="col-12 pt-1"><p>${json}</p></div>`;
        }
        if (Array.isArray(json)) {
            return `<ul>${json.map(item => `<li>${AppUtil.jsonToHtml(item)}<hr /></li>`).join('')}</ul>`;
        }
        if (typeof json === 'object' && json !== null) {
            const style = isInner ? 'inner' : '';
            return `<div>${Object.entries(json).map(([key, value]) => `
                <div class="field grid ${style}"><div class="col-12"><strong>${startCase(key)}</strong></div>${AppUtil.jsonToHtml(value, true)}</div>`).join('')}</div>`;
        }
        return '';
    }

}
