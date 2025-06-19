// Access the Props
function Profile({img, alt, price}) {


    console.log(img )
    return (
        <div className="border-1 border-black rounded-2xl p-5 m-3">
        <img 
        className="avatar rounded-full"
        src={img}
        alt={alt}
        width={100}
        height={100}
        />
        <p className="italic">{alt}</p>
        <h6>${price}</h6>
        </div>
    )
}

export default Profile
