import Image from 'next/image'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';


export default function Banner(){
    function scrolltoId(){
        var access = document.getElementById("part");
        access.scrollIntoView({behavior: 'smooth'}, true);
        }
    return(
        <div className="banniere">
                <div className='relative'>
                    <img
                        style={{width:"5051px", height:"980px"}}
                        alt='image banniere'
                        src='./img4.jpg'
                        >
                    </img>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 p-12 text-center text-white'>
                        <h1 className='text-2xl '>A la recherche du meilleur setup
                            pour jouer comme un pro ?
                        </h1>
                        <p className='py-6'>Les meilleurs composants & périphériques
                                à un rapport qualité/prix confortable !
                        </p>
                    </div>
                        <div className='bottom-0 absolute left-1/2 transform -translate-x-1/2 pb-6'>
                            <FontAwesomeIcon onClick={scrolltoId} icon={faCircleArrowDown} className="text-black mt-96 bg-white rounded-full p-1 
                                 hover:cursor-pointer hover:opacity-10" size="2xl" fade />
                        </div>
                </div>
        </div>
    )
}