export class Util 
{
    static getImageUrl(filename : string)
    {
        return process.env.PUBLIC_URL + '/images/' + filename;
    }

    static copy(object : any)
    {
        return JSON.parse(JSON.stringify(object));
    }
}