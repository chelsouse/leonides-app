import { Map, Marker } from "pigeon-maps";

function MyMap() {
  return (
    <Map
      height={350}
      center={[49.00113555917109, 21.237291738014733]}
      zoom={16}
    >
      <Marker width={50} anchor={[49.00113555917109, 21.237291738014733]} />
    </Map>
  );
}

export default MyMap;
