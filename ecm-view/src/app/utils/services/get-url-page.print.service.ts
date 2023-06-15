export class UrlPagePrintCredentialsService {

    private urlBase: string = 'http://localhost:8090';

    run(): string {
        return this.urlBase.concat('/api/v1/credentials/print/all');
    }
}