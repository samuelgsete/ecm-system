export class ResponsePageable<T> {
    /*
        Conteúdo com os dados
        trazidos do backend
    */
    content!: Array<T>;
    /*
        Quantidade de elementos
        trazidos do backend
    */
    totalElements!: number;
    /*
        Quantidade total de paginas disponíveis
    */
   totalPages!: number;
    /*
        Página atual selecionada
    */
    number!: number;

    constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}