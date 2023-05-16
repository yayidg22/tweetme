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

export const isEmoji = (s: any) : boolean => {
    const regex = /[\u{1F300}-\u{1F6FF}]/u;
    for (const char of s) {
        if (!regex.test(char)) {
            return false;
      }
    }
    return true;
}

export const getLastCharFromString = (s: number): string => {
    if (!s) {
        return ""
    }
    const result = s.toString().substring(s.toString().length, 1);
    return result.length === 0 ? s.toString() : result;
}
