import react from 'react'
import getUser from '../utils/getUser'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { GoGist, GoStar } from 'react-icons/go'

const Index = ({ repos, user }) => {
    //Div é JSX
    return(  
      <div>
        <div className='container mx-auto'>
              <div className='grid grid-cols-2 pt-16 leading-none'>
                  <div class='pt-32 pl-16 pb-10'>
                    <h1 className='text-4xl uppercase'>Hello, I'm Igor Rangel</h1>
                    <h2 className='font-bold text-4xl uppercase'>Fullstack Developer</h2>
                        <div className='relative border-orange border rounded px-16 pb-4 pt-10 mt-6'>
                            <h3 className='absolute top-0 -mt-5 py-2 px-6 text-white text-2xl font-bold uppercase bg-orange p-2'>Contact Me</h3>
                            <p>
                                <FaLinkedin className='text-6xl inline-block mr-6' />
                                <FaGithub className='text-6xl inline-block mr-6'/>
                                <FaFacebook  className='text-6xl inline-block mr-6'/>
                                <br />
                                <span className='inline-block mt-4'>or drop a line: igorrangeldearaujo@gmail.com</span>
                            </p>
                    </div>
              </div>
              <div class='mx-2 px-10 ml-2 pr-5'><img src='/images/igor-rangel.png'/></div>
          </div>
      </div>
      <div />    
      <div className='bg-white rounded-lg shadow-lg py-10 px-16'>
        <h3 className='text-4xl text-center text-orange'>About Me</h3>
        <p className='text-2x1'>Teaching experience during the period from 2015 to 2019 proven in the Territorial Center for Professional Education of the State of Bahia in the Technical Course in Computer Science and in the function of Internship Teacher, In addition, act in the disciplines Life Project and World of Work in other courses (Administration, Agriculture, Logistics), as well as in the Federal Government Program (MEDIOTEC) in the function of teacher of technical disciplines of the Technical Course in Computer Networks.
        During my time as a teacher, I participated and carried out the growing and undertaking training offered by SEBRAE in partnership with the state government. </p>
      </div>
      <div>
        <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>My Education</h3>
        <div className='grid grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6'>
            {[1,2].map(i => (
            <div className='border-dashed border-l px-12'>
                <h4 className='text-lg uppercase font-bold mb-2'>Graduate Course</h4>
                <p className='text-2xl uppercase'>Digital Technologies and Innovation in Education<br />
                <span className='text-lg normal-case font-bold'>UNICSUL - University Cruzeiro do Sul</span></p> 
            </div>
            ))}
        </div>
      </div>
      <div>
         <h3 className='text-4xl font-bold text-center uppercase mt-10 text-orange'>Tech Contributions</h3>   
         <p className='text-center'>Github stats: <RiGitRepositoryLine className='inline-block'/> {user.public_repos} / <GoGist className='inline-block'/> {user.public_gists} / <FiUsers className='inline-block' /> {user.followers}</p> 
         <div className='grid grid-cols-3 gap-2 my-6'>
            {repos.map(repo => {
                return (
                    <div key={repo.id} className='rounded bg-white p-4 hover:shadow-md'>
                        <h3 className='font-bold hover:underline'><a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a></h3>
                        <p>Language: {repo.language} / <GoStar className='inline-block'/> {repo.stargazers_count}</p>
                    </div>
                )
            })} 
         </div>  
      </div>
      <div>
        <p className='text-center my-8 py-4 border-t-2'>
            You can find the source-code of this website here:
        </p>
        <br />
        <a href=''></a>
      </div>
    </div>
    )
}
export async function getServerSideProps(context){
    const { repos, user } = await getUser('Igor202094')
    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
export default Index