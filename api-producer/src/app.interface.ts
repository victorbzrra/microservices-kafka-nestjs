export interface Register {
  type_transport: string,
  location: {
    latitude: number,
    longitude: number,
  }
  type_message: string,
  message: string
}