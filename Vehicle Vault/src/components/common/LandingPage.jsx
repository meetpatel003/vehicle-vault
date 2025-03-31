import React from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  container: { textAlign: "center", padding: "40px", fontFamily: "Arial, sans-serif" },
  heading: { fontSize: "2rem", color: "#1d4b3f", marginBottom: "20px" },
  paragraph: { fontSize: "1.1rem", color: "#333", maxWidth: "800px", margin: "auto" },
  button: { backgroundColor: "#c7fa54", border: "none", padding: "10px 20px", fontSize: "1rem", cursor: "pointer", borderRadius: "5px", marginTop: "15px" },
};

// export const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Welcome to Vehicle Vault</h1>
//       <p style={styles.paragraph}>Your trusted marketplace for buying and selling vehicles. Browse through our extensive collection and find the perfect car for you!</p>
//       <button style={styles.button} onClick={() => navigate("/about")}>Learn More</button>
//     </div>
//   );
// };


export const Home = () => {
  const navigate = useNavigate();

  const styles = {
    container: { padding: "20px", fontFamily: "Arial, sans-serif" },
    hero: { backgroundColor: "#222", color: "white", textAlign: "center", padding: "50px" },
    button: { backgroundColor: "#dc3545", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", borderRadius: "5px", fontSize: "1rem", marginTop: "15px" },
    searchBar: { display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" },
    input: { padding: "10px", width: "200px", border: "1px solid #ccc", borderRadius: "5px" },
    select: { padding: "10px", width: "200px", border: "1px solid #ccc", borderRadius: "5px" },
    grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px" },
    card: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", textAlign: "center" },
    img: { width: "100%", borderRadius: "10px" },
    footer: { backgroundColor: "#dc3545", color: "white", textAlign: "center", padding: "30px", marginTop: "40px" }
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1>Find Your Dream Car</h1>
        <p>Search from thousands of verified listings</p>
        <button style={styles.button} onClick={() => navigate("login")}>Browse Cars</button>
      </div>

      <div style={styles.searchBar}>
        <input type="text" placeholder="Search Make, Model..." style={styles.input} />
        <select style={styles.select}>
          <option>Any Fuel Type</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Electric</option>
        </select>
        <select style={styles.select}>
          <option>Any Transmission</option>
          <option>Automatic</option>
          <option>Manual</option>
        </select>
        <button style={styles.button}>Search Cars</button>
      </div>

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Explore Our Categories</h2>
      <div style={styles.grid}>
        {["Buy a Car", "Sell Your Car", "Car Rentals", "Car Repair"].map((category, index) => (
          <div key={index} style={styles.card}>
            <h5>{category}</h5>
          </div>
        ))}
      </div>

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Featured Listings</h2>
      <div style={styles.grid}>
        {["Tesla Model 3", "BMW 5 Series", "Audi A4"].map((car, index) => (
          <div key={index} style={styles.card}>
            <img src={`https://source.unsplash.com/400x300/?car${index}`} alt={car} style={styles.img} />
            <h5>{car}</h5>
            <p>$35,000 | 2023 | Electric</p>
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <h2>Want to Sell Your Car?</h2>
        <p>Post your car and get instant buyers.</p>
        <button style={styles.button} onClick={() => navigate("/sell-car")}>Post Your Car</button>
      </div>
    </div>
  );
};


export const About = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>About Vehicle Vault</h1>
    <p style={styles.paragraph}>Vehicle Vault is a premium platform designed to connect buyers and sellers of automobiles. Our mission is to provide a seamless experience in vehicle trading, ensuring trust, transparency, and top-notch customer service.</p>
  </div>
);

export const Contact = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Contact Us</h1>
    <p style={styles.paragraph}>Have questions? Reach out to us at:</p>
    <p style={styles.paragraph}><strong>Email:</strong> support@vehiclevault.com</p>
    <p style={styles.paragraph}><strong>Phone:</strong> +91 98765 43210</p>
    <p style={styles.paragraph}><strong>Address:</strong> 123, Auto Market Street, Mumbai, India</p>
  </div>
);

export default { Home, About, Contact };
