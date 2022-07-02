
interface IHttpResponse{
    json: any;
    ok: boolean;
    statusText: any,
}


export const handleJsonResponse = (response: IHttpResponse)=> {
    
    if (!response.ok) {
        return Promise.reject(response.statusText)
    }
    return Promise.resolve(response.json())
}