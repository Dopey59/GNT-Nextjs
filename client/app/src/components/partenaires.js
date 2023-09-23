import React from "react";
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";




export default function Partenaire(){
    function scrolltoId(){
        var access = document.getElementById("part2");
        access.scrollIntoView({behavior: 'smooth'}, true);
        }
    return(
        <>
        <main className="h-full w-full p-12 py-16">
            {/* Steelseries */}
                <div id="part" className='relative w-full h-screen'>
                    <Fade>
                    <div className='flex justify-center'>
                        <h1 className='text-5xl text-black'>Des partenaires puissants rien que pour toi</h1>
                    </div>
                    
                    <div className='flex items-center justify-around p-12  py-44'>
                            <div>
                                <Image priority width={900} height={600} alt="logo steelseries partenaire" src='./steelseries.svg' className='w-60 h-60'/>
                            </div>

                   
                        <div className='flex flex-col items-start gap-4'>
                            <h1 className='text-3xl font-bold'>Découvre la puissance avec Steelseries |</h1>
                            <p className='text-xl'>Accède à toutes les offres Steelseries du moment.</p>
                            <p className='text-md'>Plonge dans l'empire du gaming et test leurs dernières technologie "Sonar"
                                pour rendre les jeux <br></br>encore plus immersif et entendre vos ennemies de loin. Boostez 
                                les basses de votre casque <br></br> ou améliorer le son de votre micro pour une qualité streaming.
                            </p>
                            <div className="bg-orange-500 font-bold text-white p-3 w-1/2 text-center rounded-md
                                    hover:duration-500 transition duration-0 hover:bg-orange-600 hover:cursor-pointer">
                                <a
                                    href='#'>Voir
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Logitech */}

                    <div className='flex items-center justify-around '>
                        <div className='flex flex-col items-start gap-4'>
                            <h1 className='text-3xl font-bold'>Plutôt bureautique ou gaming ? |</h1>
                            <p className='text-xl'>Accède à toutes les offres Logitech du moment.</p>
                            <p className='text-md'>
                                Adopte une nouvelle attitude au bureau avec les souris ergonomiques confortables pour ton poignet
                                ou <br></br> encore la chaise ergonomique de chez Logitech. Le géant de la tech est aussi spécialisé
                                dans le gaming <br></br> où de nombreux joueurs professionnels se fournissent et sont sponsorisés.
                            </p>
                            <div className="bg-blue-500 font-bold text-white p-3 w-1/2 hover:cursor-pointer
                                text-center text-xl rounded-md hover:duration-500 transition
                                duration-0 hover:bg-blue-600">
                                <a
                                    href='https://www.logitech.com/fr-fr'>Voir
                                </a>
                            </div>
                        </div>
                        <Image  priority width={900} height={600}  alt="logo logitech partenaire" src='/logitech.png' className='w-60 h-30'/>
                    </div>
                    <div className='bottom-0 absolute left-1/2 transform -translate-x-1/2 pb-6'>
                        <FontAwesomeIcon onClick={scrolltoId} icon={faCircleArrowDown} className="text-black mt-96 bg-white rounded-full p-1 
                        hover:cursor-pointer hover:opacity-10" size="2xl" />
                    </div>
                        
                    </Fade>
                </div>
           
        </main>
        </>
    )
}