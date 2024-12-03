import Nav from "./navigation";
import Footer from "./Footer";


const CarDetail = () => {
  const car = {
    name: "Toyota4",
    make: "Toyota",
    year: 2022,
    pricePerDay: 500,
    mileage: 15000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    color: "White",
    description: "A compact and reliable car, great for city and highway driving.",
    images: [
      "https://via.placeholder.com/800x400", // Replace with actual image URLs
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    
    ],
    location: { address: "123 Main Street, Springfield" },
    createdAt: "2024-11-19T16:53:55.824+00:00",
    updatedAt: "2024-11-19T16:53:55.824+00:00",
    RatingAvrg: 1.9,
    RatingQuantity: 1,
  };

  return (
    <>
    <Nav/>
    <div className="car-detail-container my-5">
      <div className="car-detail-row d-flex flex-wrap">
        {/* Car Images */}
        <div className="car-images col-md-6 mb-4">
          <img
            src='/images/beuty.png'
            alt={car.name}
            className="w-100 rounded shadow"
            style={{ height: "auto" }}
          />
          <div className="row mt-3">
            {car.images.slice(1).map((img, index) => (
              <div className="col-6 mb-3" key={index}>
                <img
                  src='/images/beuty.png'
                  alt={`Car thumbnail ${index}`}
                  className="w-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Car Details */}
        <div className="car-details col-md-6">
          <div className="card p-4 shadow">
            <h2 className="mb-3 text-primary">{car.name}</h2>
            <p>
              <span className="badge bg-info me-2">{car.make}</span>
              <span className="badge bg-secondary">{car.year}</span>
            </p>
            <h4 className="text-success mb-3">${car.pricePerDay} / day</h4>
            <p>{car.description}</p>

            <ul className="list-group mb-4">
              <li className="list-group-item d-flex justify-content-between">
                <span>Mileage:</span>
                <strong>{car.mileage.toLocaleString()} km</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Fuel Type:</span>
                <strong>{car.fuelType}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Transmission:</span>
                <strong>{car.transmission}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Color:</span>
                <strong>{car.color}</strong>
              </li>
            </ul>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5>
                  Rating:{" "}
                  <span className="badge bg-warning text-dark">
                    {car.RatingAvrg} ★
                  </span>{" "}
                  ({car.RatingQuantity} Reviews)
                </h5>
              </div>
              <button className="btn btn-primary btn-lg">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Location Information */}
   <div className="location-info mt-5">
  <div className="card p-4 shadow-lg bg-light rounded">
    <div className="text-center mb-4">
      <h4 className="text-primary">📍 Location</h4>
      <p className="text-muted">
        {car.location?.address || "Location not specified"}
      </p>
    </div>
    <div className="d-flex justify-content-around flex-wrap">
      <div className="text-center mb-3">
        <h6 className="text-secondary">🗓 Added On</h6>
        <p className="fw-bold text-dark">
          {new Date(car.createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className="text-center mb-3">
        <h6 className="text-secondary">⏰ Last Updated</h6>
        <p className="fw-bold text-dark">
          {new Date(car.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
    <Footer/>
    </>
  );
};

export default CarDetail;
