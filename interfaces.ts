interface new_flight{
  id_fligth: string,
  route: string
}

interface default_event{
  id_fligth: string, 
  location: {
    latitude: number,
    longitude: number
  },
  message: string
}

interface alert_event{ 
  id_fligth: string,
  location: {
    latitude: number,
    longitude: number 
  },
  type_message: number,
}

interface danger_event{ 
  id_fligth: string,
  location: {
    latitude: number,
    longitude: number 
  },
  type_message: number,
  description: string
}