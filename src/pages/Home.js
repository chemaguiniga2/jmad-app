import React, { Fragment } from 'react';
import Img from '../components/Img';



const Home = () => {
    return (
        <Fragment>
            <div className="py-12 flex md:flex-row flex-col p-8 md:px-0">
                <div className="flex flex-col md:w-6/12 md:justify-center	md:ml-24 md:items-start mb-8 items-center">
                    <h2 className="font-black text-xl tracking-widest name-chema">José María Aguíñiga Díaz</h2>
                    <h1 className="text-6xl font-extrabold	">Who am I?</h1>
                    <p>Hello! My name is José María but everybody call me Chema,<br></br> I am a
                        Computer Science Engineer with experience in Web Development, <br></br>  Data Analysis and Account Management,
                        I found myself as a flexible person, <br></br>  I adapt quite easily to unknown environments.</p>
                </div>
                <div className="md:w-6/12">
                    <Img
                        srcImg="/images/perfil.jpg"
                        atlName="perfil"
                        classes="flex md:justify-end justify-center"
                    />
                </div>
            </div>
            <div className="bg-gray-300	flex md:flex-row flex-col p-8 md:px-0">
                
                <Img
                    srcImg="/images/fine.jpeg"
                    atlName="fine"
                    classes="flex md:w-6/12 md:my-64 md:justify-start justify-center"
                />
                <div className="flex flex-col md:justify-center md:items-start items-center md:w-6/12 md:my-72 mt-8">
                    <h2 className="font-black text-xl tracking-widest name-chema">Wanna check my code?</h2>
                    <h1 className="text-6xl font-extrabold	">Feel free to check my GitHub</h1>
                    <p>In there you will find many personal, professional and scholar projects.<br></br> Feel free to
                        clone any project you want. <br></br>  It's for free!!</p>
                </div>
                
            </div>
            <div className="py-12 flex md:flex-row flex-col p-8 md:px-0">
                <div className="flex flex-col md:w-6/12 md:justify-center	md:ml-24 md:items-start mb-8 items-center">
                    <h2 className="font-black text-xl tracking-widest name-chema">Wanna know me better?</h2>
                    <h1 className="text-6xl font-extrabold	">Check my personal life</h1>
                    <p>Feel free also to check my likes, dislikes, hobbies or maybe my Instagram</p>
                </div>
                <div className="md:w-6/12">
                    <Img
                        srcImg="/images/perfil.jpg"
                        atlName="perfil"
                        classes="flex md:justify-end justify-center"
                    />
                </div>
            </div>
            
        </Fragment>
        
    );
}
 
export default Home;