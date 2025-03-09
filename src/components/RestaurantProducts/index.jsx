import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Error from "../Error";
import Loader from "../Loader";
import { FaFire } from "react-icons/fa";
import RestaurantProductCard from "../RestaurantProductCard";



const RestaurantProducts = () => {
    // Url'deki restaurant id'sine erişmek için yaptık:
    const { id } = useParams();

    // Bileşen içerisinde verileri yönetebilmek için useState kurulumu yap:
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    // Products endpointine istek atarak ilgili restaurant.1a ait verileri almak için:

    useEffect(() => {
        api
            .get(`/products?restaurantId=${id}`)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);

    return (
        <div>
            {error ? (
                <Error />
            ) : !products ? (
                <Loader />
            ) : products.length === 0 ? (
                <p className=" p-3 text-2xl font-semibold">
                    Bu Restaurant'a Ait Ürün Bulunamadı
                </p>
            ) : (
                <div>
                    <h2 className="flex gap-2 text-2xl">
                        <FaFire className="text-red-500" /> Popüler
                    </h2>
                    <p className="text-gray-600">
                        Restoranın En Çok Tercih Edilen Ürünleri
                    </p>

                    <div className="grid lg:grid-cols-2 gap-5 mt-5">
                        {products?.map((item) => (
                            <RestaurantProductCard
                                key={item.id}
                                item={{ ...item, id: Number(item.id) }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RestaurantProducts;
