export interface FotoPokazMapa {
    lat: number,
    lng: number
    //alt: number,  
   //dir: number 
}

export interface FotoPokazTematy {
    tag: Array<String>,
    aut: string,
    title: string,
    subtitle: string
}

export interface FotoPokazCzas {
  dat: Date
}
