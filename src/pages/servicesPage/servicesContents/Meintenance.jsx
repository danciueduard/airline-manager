import MeintenanceItem from "./MeintenanceItem";

function Meintenance() {
  return (
    <>
      <MeintenanceItem
        image="img/meintenance-worker.jpg"
        paragraph={"engineers"}
      />
      <MeintenanceItem
        image={"img/meintenance-hangar.jpg"}
        paragraph={"hangar"}
      />
    </>
  );
}

export default Meintenance;
