import React from 'react'
import getUser from '../utils/getUser'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { GoGist, GoStar } from 'react-icons/go'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero/index'

const Index = ({ repos, user }) => {
    return(  
      <div className='container mx-auto md:px-12'>
        <PageHead />
        <Hero />   

        <div className='bg-white rounded-lg shadow-lg py-12 px-8 mx-8 md:mx-0 md:px-16'>
          <h3 className='text-4xl text-center text-orange'>About</h3>
          <p className='text-2x1'>Teaching experience during the period from 2015 to 2019 proven in the Territorial Center for Professional Education of the State of Bahia in the Technical Course in Computer Science and in the function of Internship Teacher, In addition, act in the disciplines Life Project and World of Work in other courses (Administration, Agriculture, Logistics), as well as in the Federal Government Program (MEDIOTEC) in the function of teacher of technical disciplines of the Technical Course in Computer Networks.
          During my time as a teacher, I participated and carried out the growing and undertaking training offered by SEBRAE in partnership with the state government. </p>
        </div>

      <div>
        <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange'>My Education</h3>
        <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg'>
            {[1,2].map(i => (
            <div key={'education-'+i} className='border-dashed border-t md:border-t-0 md:border-l px-6 mx-6 md:mx-0 md:px-12 py-6'>
                <h4 className='text-lg uppercase font-bold mb-2'>Graduate Course</h4>
                <p className='text-2xl uppercase'>Digital Technologies and Innovation in Education<br />
                <span className='text-lg normal-case font-bold'>UNICSUL - University Cruzeiro do Sul</span></p> 
            </div>
            ))}
        </div>
      </div>

      <div>
         <h3 className='mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10 text-orange'>Tech Contributions</h3>   
         <p className='text-center'>Github stats: <RiGitRepositoryLine className='inline-block'/> {user.public_repos} / <GoGist className='inline-block'/> {user.public_gists} / <FiUsers className='inline-block' /> {user.followers}</p> 
         <div className='md:grid md:grid-cols-3 md:gap-2 md:my-6'>
            {repos.map(repo => {
                return (
                    <div key={repo.id} className='my-3 md:my-0 rounded bg-white p-4 hover:shadow-md'>
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
            <br />
            <a href=''>https://github.com/igorrangeldearaujo/Igor-Resume</a>
        </p>
      </div>
      
    </div>
    )
}
export async function getServerSideProps(context){
    const { repos, user } = await getUser('igorrangeldearaujo')
    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
}
export default Index