import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/navbar/navBar';
import Banner from './components/banner/banner';
import BlogPreview from './components/blogPreview/blogPreview';
import SemiFooter from './components/semiFooter/semiFooter';
import Footer from './components/footer/footer';
import { useState } from 'react';
import LatestBlog from './components/latestBlogs/latestBlog';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/interview Prep' element={<InterviewPrep />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <BlogPreview />
      <SemiFooter />
      <Footer />
    </>
  )
}

function Blogs() {
  const state = useState(1)
  const [tab, setTab] = state
  return (
    tab === 1 ?
      <>
        <div>
          <NavBar />
          <TabNav state={state} />
          <LatestBlog />
        </div>
        <Trending />
      </> : tab === 2 ?
        <>
          <div>
            <NavBar />
            <TabNav state={state} />
            <h3>TOP</h3>
          </div>
          <Trending />
        </> : tab == 3 ?
          <>
            <div>
              <NavBar />
              <TabNav state={state} />
              <h3>Your Intereste</h3>
            </div>
            <Trending />
          </> : <></>
  )
}

function TabNav({state}){
  const [propState,setState] = state
  return <div>
    <button onClick={() => {setState(1)}}>Latest</button>
    <button onClick={() => {setState(2)}}>Top</button>
    <button onClick={() => {setState(3)}}>Your Intereste</button>
  </div>
}

function Trending() {
  return (
    <div>
      <h3>Trending</h3>
      <div>
        <div>#lorem</div>
        <div>75 latest blogs</div>
      </div>
      <div>
        <div>#react18</div>
        <div>75 latest blogs</div>
      </div>
      <div>
        <div>#web3</div>
        <div>75 latest blogs</div>
      </div>
      <div>
        <div>#tailwind</div>
        <div>75 latest blogs</div>
      </div>
      <div>
        <div>#flutter</div>
        <div>75 latest blogs</div>
      </div>
      <div>
        <div>#angular</div>
        <div>75 latest blogs</div>
      </div>
    </div>
  )
}

function InterviewPrep() {
  return <div>InterviewPrep</div>
}

function Contact() {
  return <div>Contact</div>
}

function NoPage() {
  return <div>No page</div>
}

