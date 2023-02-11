export interface IImg {
    id:number
    sName:string
    city:string
    age:number
    image: string

}
export interface Iimages{
    images:IImg[],
    upd: boolean
}
