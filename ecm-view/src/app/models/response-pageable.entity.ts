export class ResponsePageable<T> {

    /* Conteúdo trazido na paginação */
    content!: Array<T>;

    /* Quantidade total de elementos */
    totalElements!: number;

    /* Quantidade total de paginas */
    totalPages!: number;

    /* Página atual selecionada */
    number!: number;

    /* Tamanho da página */
    size!: number;

    constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}