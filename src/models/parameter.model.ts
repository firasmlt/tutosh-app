export class Parameter {

    id?: ParametersID;
    value?: string;
    description?: string;
    constructor(id?: ParametersID, value?:string, description?:string){
        this.id = id;
        this.value = value;
        this.description = description;
    }
    intValue(){
        return parseInt(this.value);
    }
}


export enum ParametersID {
  MIN_TUTOR_REVIEWS = 'MIN_TUTOR_REVIEWS',
  MIN_TUTOR_SCORE = 'MIN_TUTOR_SCORE',
  MIN_SESSION_TOKENS = 'MIN_SESSION_TOKENS',
  TOKEN_PRICE = 'TOKEN_PRICE',
  //Todo: Verify if we still need these values (v)
  /*11*/HOURLY_RATE = 'HOURLY_RATE', //some functions still depends
  /*22*/CLP = 'CLP', // on these two values (clp and hourly rate)
  FREE_TOKEN_AMOUNT = 'FREE_TOKEN_AMOUNT'
}