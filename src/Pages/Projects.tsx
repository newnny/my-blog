import { projects } from '../utils'

const Projects = () => {
  return (
    <section className='text-lg'>
      {projects.map(project =>
        <article className='flex flex-col p-2'>
          <a className='font-semibold' href={project.link} target="_blank" rel="noopener">
            {`${project.name} [${project.year}]`}
          </a>
          {project.summary}
        </article>
      )}
    </section>
  )
}

export default Projects