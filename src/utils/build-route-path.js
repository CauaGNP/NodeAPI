export function buildRoutePath(path){
    const regexParameters = /:([a-zA-Z]+)/g;

    const regexWithParams = path.replaceAll(regexParameters, '(?<$1>[a-z0-9\-_]+)');
    const pathRegex = new RegExp(`${regexWithParams}(?<query>\\?(.*))?$`);

    return pathRegex; 
}