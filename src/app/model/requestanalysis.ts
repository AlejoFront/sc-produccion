import { Requeststate } from './requeststatus';

export class Requestanalysis {
    constructor(
        public code: number,
        public requestStatus: Requeststate
    ){}
}

export class RequestAnalysisPK {
    constructor(
        public requestAnalysisPK: Requestanalysis
    ){}
}