import './Testimonials.css'
import { FaStar } from 'react-icons/fa';

const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => <FaStar key={i} />);
};
const testimonialCards = [
  {
    id: 1,
     rating: generateStars(5),
    title: "Sunt qui esse pariatur duis deserunt mollit ",
    description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Cody Fisher",
    post: "Medical Assistant",
  },
  {
    id: 2,
     rating: generateStars(5),
    title: "Sunt qui esse pariatur duis deserunt mollit ",
    description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Jenny Wilson",
    post: "Nursing Assistant",
  },
  {
    id: 3,
     rating: generateStars(5),
    title: "Sunt qui esse pariatur duis deserunt mollit ",
    description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Guy Hawkins",
    post: "President of Sales",
  },
  {
    id: 4,
     rating: generateStars(5),
    title: "Sunt qui esse pariatur duis deserunt mollit ",
    description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Cody Fisher",
    post: "Medical Assistant",
  },
  {
    id: 5,
     rating: generateStars(5),
    title: "Sunt qui esse pariatur duis deserunt mollit ",
    description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Darlene Robertson",
    post: "Dog Trainer",
  },
  {
    id: 6,
     rating: generateStars(5),
    title: "Sunt qui esse pariatur duis deserunt mollit ",
    description: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Dianne Russell",
    post: "Medical Assistant",
  },
]


const Testimonials = () => {
  return (


    <div className='TestimonialsContainer'>
      <p>Testimonials</p>
     <div className="testimonialHeading">
      <h2>People all over the world use banko.</h2>
      <p>Rated 4.8/5 from over 1000 users</p>
     </div>


   <div className="Testimonials">
  {testimonialCards.map((testimonial)=>(
      <div className="testimonialCard" key={testimonial.id}>
        <span className='ratting'>{testimonial.rating}</span>
        <h3 className='testimonialTitle'>{testimonial.title}</h3>
        <p className='testimonialDes'>{testimonial.description}</p>
        <h5 className='testimonialName'>{testimonial.name}</h5>
        <h5 className='testimonialPost'>{testimonial.post}</h5>
      </div>
  ))}

   </div>
    </div>
  )
}

export default Testimonials