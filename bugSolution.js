import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This route should be defined before the more general one */}
        <Route path="/about/*" element={<AboutDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
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