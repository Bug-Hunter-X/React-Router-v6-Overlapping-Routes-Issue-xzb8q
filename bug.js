import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route will cause the error, because it overlaps with the above route */}
        <Route path="/about/*" element={<AboutDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return <div>Home</div>;
}

function About(){
  return <div>About</div>;
}

function AboutDetails(){
  return <div>About Details</div>;
}