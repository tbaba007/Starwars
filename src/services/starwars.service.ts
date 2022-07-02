import { Get as GetStarwarslist } from '../api/HttpRequest';

export const GetAll = (pageNumber?:number) => {
    
    return GetStarwarslist(`people`);
}