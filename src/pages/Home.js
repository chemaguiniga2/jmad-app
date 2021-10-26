import React from 'react';
import Img from '../components/Img';



const Home = () => {
    return (
        <div className="py-12 flex md:flex-row flex-col">
            <div className="flex flex-col md:w-6/12 md:justify-center	md:ml-24 md:items-start mb-8 items-center">
                <h2 className="font-black text-xl tracking-widest name-chema">José María Aguíñiga Díaz</h2>
                <h1 className="text-6xl font-extrabold	">Who am I?</h1>
                <p>Hello! My name is José María but everybody call me Chema,<br></br> I am a
                    Computer Science Engineer with experience in Web Development, <br></br>  Data Analysis and Account Management,
                    I found myself as a flexible person, <br></br>  I adapt quite easily to unknown environments.</p>
            </div>
            <div className="md:w-6/12">
                <Img />
            </div>
        </div>
    );
}
 
export default Home;