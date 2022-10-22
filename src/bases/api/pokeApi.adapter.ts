import axios from "axios";


export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string) {
        const res: any = await fetch(url);
        const data: T = await res.json();
        console.log('fetch');
        return data;
    }
}

export class PokeApiAxiosAdapter implements HttpAdapter {

    private readonly axios = axios;


    async get<T>(url: string) {
        const { data } = await this.axios.get<T>(url);
        console.log('axios');
        return data;
    }

    async post(url: string) {
        return url;
    }

    async patch(url: string) {
        return url;
    }

    async delete(url: string) {
        return url;
    }


}