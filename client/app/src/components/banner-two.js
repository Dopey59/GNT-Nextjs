export default function Banniere2(){
    return(
        <div className="banniere h-full p-12 bg-slate-900">
            <div className="flex flex-col gap-4 items-center justify-center ">
                <h1 id="part2" className='text-5xl mx-auto text-white'>Des jeux jusqu'à -90% sur n'importe quel plateforme !</h1>
                <p className='text-orange-600'>Pré-commande les derniers jeux moins chers qu'ailleurs et accède à pleins d'autres réductions sur le site. </p>

                <a  className="bg-blue-500 font-bold text-white p-4 w-1/5 text-center rounded-md
                    hover:duration-500 transition duration-0 hover:bg-orange-600"
                    href='https://www.instant-gaming.com/?igr=gamer-7232d0'
                    target="_blank">En profiter</a>
            </div>
            <div className='grid sm:grid-cols-4  screen grid-cols-1 gap-6 p-12'>
                <img style={{width:"564px", height:"810px"}}  className="rounded-md" alt='image banniere' src='./spm.jpeg'></img>
                <img style={{width:"564px", height:"810px"}}  className="rounded-md" alt='image banniere' src='./starf.jpeg'></img>
                <img style={{width:"564px", height:"810px"}}  className="rounded-md" alt='image banniere' src='./Godofwar.jpeg'></img>
                <img style={{width:"564px", height:"810px"}}  className="rounded-md" alt='image banniere' src='./gta.jpeg'></img>
            </div>

    </div>
    )
}