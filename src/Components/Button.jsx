const Button = ({label,url}) => {
  return (
    <button className="flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full text-white bg-light-green border-light-green">
        {label} 
        {url && <img src={url} alt="arrowRight" className="ml-2 rounded-full w-5 h-5"/> }
    </button>
  )
}

export default Button