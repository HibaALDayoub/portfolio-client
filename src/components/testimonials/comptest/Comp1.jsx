import './comp.css'

const Comp1 = ({img,description,img2,name,description2}) => {
    return (
        <div className='comp'>
            <img src={img} alt='' />
            <p>{description}</p>
            <div className="namewithimg">
                <img src={img2} alt='' />
                <div className="namewithp">
                    <h3>{name}</h3>
                    <p>{description2}</p>
                </div>
            </div>
        </div>
    )
}

export default Comp1
