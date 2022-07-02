import { handleJsonResponse } from "./HttpResponse";
const baseUrl = process.env.REACT_APP_API_BASEURL;

export const Get = async (path:string) => {
  
  const response = await fetch(`${baseUrl}/${path}`)
    .then(handleJsonResponse)
    .then((response) => {
      return response;
    });
  return response;
};


