import { useParams } from "react-router-dom";
import RestaurantDetail from "../../components/RestaurantDetail";
import RestaurantProducts from "../../components/RestaurantProducts";

const Detail = () => {
  const { id } = useParams();
  console.log("Restaurant ID:", id); // Burada id'yi konsola yazdırarak doğru parametreyi aldığından emin ol
  return (
    <div>
      <div className="shadow">
        <div className="max-w-[1440px] mx-auto p-5 lg:p-8">
          <RestaurantDetail id={id} />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto p-5 lg:p-8">
        <RestaurantProducts id={id} />
      </div>
    </div>
  );
};

export default Detail;