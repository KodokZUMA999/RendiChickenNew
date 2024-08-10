import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold">King'sChicken</div>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-secondary">Home</Link></li>
        <li><Link to="/about" className="hover:text-secondary">About</Link></li>
        <li><a href="#" className="hover:text-secondary">Menu</a></li>
        <li><a href="#" className="hover:text-secondary">Contact</a></li>
      </ul>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://www.agropustaka.id/wp-content/uploads/2022/07/ayam-layer12.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold mb-4">Welcome to King'sChicken</h1>
        <p className="text-xl mb-6">AYAM TERUS SETIAP HARI</p>
        <button className="btn-primary">Click Here To Order</button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; 2024 King's Chicken. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-secondary">Terms of Service</a></li>
          <li><a href="#" className="hover:text-secondary">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

const AboutUs = () => {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-4xl font-bold mb-6 text-primary">About Us</h1>
      <p className="mb-4">
        Welcome to King's Chicken! We are dedicated to providing the highest quality chicken products 
        to our customers. Our journey began with a passion for sustainable farming and animal welfare, 
        ensuring that every product you receive from us is of the highest standard.
      </p>
      <p className="mb-4">
        Our farm is located in the beautiful countryside, where our chickens are raised in a healthy 
        and natural environment. We believe in transparency and integrity in all our practices, 
        from how we care for our chickens to how we serve our customers.
      </p>
      <p className="mb-4">
        Thank you for choosing King's Chicken. We look forward to serving you with our fresh and 
        nutritious products.
      </p>
    </div>
  );
};

const Products = () => (
  <div className="p-4 flex-grow">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">TELUR AYAM</h3>
        <img src="https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/aEbCuGX6S5VShfAaVwbnS/original/017943500_1597722546-Perbedaan-Telur-Ayam-yang-Perlu-Diketaui-dan-Manfaatnya-shutterstock_534225985.jpg" alt="Product 1" className="mb-4 w-full h-48 object-cover rounded"/>
        <p className="mb-4">Telur ayam King's Chicken adalah pilihan tepat untuk Anda yang menginginkan sumber protein berkualitas. Telur kami dihasilkan oleh ayam-ayam yang dipelihara dalam kondisi alami dan diberi pakan yang sehat dan seimbang. Setiap telur dikemas dengan hati-hati untuk memastikan kesegarannya sampai ke tangan Anda. Kami menyediakan berbagai ukuran telur, mulai dari ukuran kecil hingga jumbo, yang cocok untuk berbagai keperluan masakan Anda.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">AYAM BERTELUR</h3>
        <img src="https://cdn0-production-images-kly.akamaized.net/KenyqlZq1mMETSivRmEBa7HxEs4=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1205992/original/026620600_1460899960-telurayam.jpg" alt="Product 2" className="mb-4 w-full h-48 object-cover rounded"/>
        <p className="mb-4">King's Chicken dengan bangga menawarkan ayam hidup berkualitas tinggi untuk kebutuhan Anda. Ayam hidup kami dipelihara dengan standar kebersihan dan kesehatan tertinggi di peternakan yang berkomitmen pada kesejahteraan hewan. Ayam-ayam kami sehat, aktif, dan diberi pakan alami yang kaya nutrisi untuk memastikan pertumbuhan optimal dan kesehatan yang baik.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">PAKAN AYAM</h3>
        <img src="https://www.deheus.id/siteassets/news/article/pentingnya-memilih-pakan-ayam-yang-baik/crumble-resize.jpg" alt="Product 3" className="mb-4 w-full h-48 object-cover rounded"/>
        <p className="mb-4">Kami juga menyediakan pakan ayam berkualitas tinggi yang dirancang untuk memenuhi semua kebutuhan nutrisi ayam Anda. Pakan ayam King's Chicken diformulasikan dengan bahan-bahan alami yang kaya akan vitamin dan mineral, memastikan ayam Anda tumbuh sehat dan produktif. Pakan kami tersedia dalam berbagai jenis, termasuk pakan starter untuk anak ayam, pakan grower untuk ayam yang sedang tumbuh, dan pakan layer untuk ayam petelur.</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">PETI TELUR</h3>
        <img src="https://static.gatra.com/foldershared/images/2022/ujm/09-Sep/66d9c670-422b-4d25-a09f-0ae50ed91dbb.jpg" alt="Product 1" className="mb-4 w-full h-48 object-cover rounded"/>
        <p className="mb-4">King's Chicken juga menawarkan peti telur berkualitas tinggi untuk kebutuhan penyimpanan dan pengangkutan telur Anda. Peti telur kami dirancang khusus untuk menjaga telur tetap aman dan segar selama proses pengiriman dan penyimpanan. Dibuat dari bahan yang kuat dan tahan lama, peti telur ini mampu menampung berbagai ukuran telur, mulai dari kecil hingga jumbo.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">PUPUK FESES</h3>
        <img src="https://asset.kompas.com/crops/x4XgjXoTeC1SaZqeBYUIIbDj6JI=/192x208:1728x1232/750x500/data/photo/2021/03/12/604b37783c8ae.jpg" alt="Product 2" className="mb-4 w-full h-48 object-cover rounded"/>
        <p className="mb-4">King's Chicken kini juga menyediakan pupuk kotoran ayam berkualitas tinggi untuk mendukung kebutuhan pertanian dan perkebunan Anda. Pupuk kotoran ayam kami adalah pilihan alami dan efisien untuk meningkatkan kesuburan tanah dan memperbaiki struktur tanah. Diperoleh dari ayam-ayam sehat yang dipelihara dengan pakan alami, pupuk ini kaya akan nutrisi esensial yang dibutuhkan tanaman. </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">KARUNG</h3>
        <img src="https://png.pngtree.com/thumb_back/fw800/background/20231104/pngtree-texture-of-a-rustic-brown-sack-image_13761444.png" alt="Product 3" className="mb-4 w-full h-48 object-cover rounded"/>
        <p className="mb-4">King's Chicken kini juga menyediakan karung coklat berkualitas tinggi yang serbaguna dan tahan lama untuk berbagai keperluan penyimpanan dan pengangkutan. Karung coklat kami terbuat dari bahan yang kuat dan tahan lama, memastikan barang-barang Anda tetap aman selama proses pengiriman dan penyimpanan.</p>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="bg-primary min-h-screen flex flex-col text-text">
        <Navbar />
        <Routes>
          <Route path="/" element={<><HeroSection /><Products /></>}/>
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
