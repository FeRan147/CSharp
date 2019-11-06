import { Observable } from 'rxjs';

export interface Status {
    value: boolean;
}

export abstract class StatusCardData {
    abstract getStatus(): Observable<Status>;
    abstract switchOn(): Observable<boolean>;
    abstract switchOff(): Observable<boolean>;
}
