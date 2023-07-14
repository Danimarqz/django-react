import o1 from "assets/img/office1.jpg"
import o2 from "assets/img/office2.jpg"


function Images() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-8">
        <img
          src={o1}
          className="w-full h-96 object-cover"
        />
        <img
          src={o2}
          className="w-full h-96 object-cover"
        />
      </div>
    </div>
  );
}
export default Images;
