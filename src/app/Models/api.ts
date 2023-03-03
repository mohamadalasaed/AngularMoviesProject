export class ApiService {
    API_BASE_URL : string = 'https://api.themoviedb.org/3/movie/popular';
    API_SEARCH : string = 'https://api.themoviedb.org/3/search/movie'
    API_KEY : string = 'bcc4ff10c2939665232d75d8bf0ec093';

    getUrl(){
        return `${this.API_BASE_URL}?api_key=${this.API_KEY}`
    }

    getSearchUrl(movieName: string){
        return `${this.API_SEARCH}?api_key=${this.API_KEY}&query=${movieName}`
    }
}
