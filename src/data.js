export const API_KEY = 'AIzaSyA0R0KnktugNVDekNbf27W_HOs-1hl3Tto';

export const value_converter =(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}