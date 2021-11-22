export interface Register {
  id: number,
  type_transport: string,
  location: {
    latitude: number,
    longitude: number,
  }
  type_message: string,
  message: string
}