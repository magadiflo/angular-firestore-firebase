export interface Game {
    id: string,
    name: string,
    url: string,
    votos: number,
}

export interface RespuestaApi {
    ok: boolean, 
    mensaje: string,
  }