import Profile from "./profile";

//  Pass props to the child component
export default function Avatar() {
  const arr = [
    { img: "https://i.imgur.com/1bX5QH6.jpg", alt: "Lin Lanying", price: 300 },
    { img: "https://i.imgur.com/1bX5QH6.jpg", alt: "Lin Lanying", price: 400 },
    { img: "https://i.imgur.com/1bX5QH6.jpg", alt: "Lin Lanying", price: 500 },
    { img: "https://i.imgur.com/1bX5QH6.jpg", alt: "Lin Lanying", price: 600 },
  ];

  return (
    <div className="flex gap-5">
      {arr.map((obj, index) => (
        <Profile img={obj.img} alt={obj.alt} price={obj.price} key={index} />

      ))}
    </div>
  );
}

