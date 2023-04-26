export function replaceGuionToSlashFromString(s: string) {
    if (!s) {
        return ''
    }
    return localToString(s).replace(/-/g, "/")
}

export function localToString(s: any) {
    if (!s) {
        return ""
    }
    return String(s)
}

export const getLastCharFromString = (s: number): string => {
    if (!s) {
        return ""
    }
    const result = s.toString().substring(s.toString().length, 1);
    return result.length === 0 ? s.toString() : result;
}
