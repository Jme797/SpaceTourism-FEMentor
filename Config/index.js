const isDev = process.env.NODE_ENV !== 'production';

export const Server = isDev ? "http://localhost:3000/" : "http://spacetourism.jordanme.co.uk/"


export const breakpoints = {
  sm: 368,
  md: 768,
  lg: 1024,
  xl: 1268
}