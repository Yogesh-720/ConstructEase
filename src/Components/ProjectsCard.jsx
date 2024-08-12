import { star } from "../assets/icons"

const ProjectsCard = ({imgURL,name,description}) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px] rounded-3xl" />
        <div className="flex gap-2.5 justify-start mt-8">
            <img  src={star} alt="rating" width={24} height={24}/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-montserrat text-slate-gray font-[500]">{description}</p>
    </div>
  )
}

export default ProjectsCard