export interface Packaging {
  
  date:string;
  id:number;
  seller:{
    email:string;
    id:string;
    job:string;
    name:string;
    saeKey:number;
  },
  status:string;
  subOrders:SubOrder[]
  urgent:boolean;
}
export interface SubOrder{
    active:boolean;
    units:number;
    presentation:{
      id:number;
      presentation:number;
      presentationType:string;
    },
    productRovianda:{
      imgS3:string;
      name:string;
    }
}
