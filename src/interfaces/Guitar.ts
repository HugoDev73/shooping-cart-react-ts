export interface Guitar {
    id:number,
    name: string,
    image:string,
    description:string,
    price:number,
    quantity:number
}

export interface GuitarProps {
    guitar:Guitar,
    addToCart: (item:Guitar) => void
}