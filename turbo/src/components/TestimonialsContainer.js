import React from 'react';
import Testimonial from './Testimonial.js';
const TestimonialsContainer = () => {
  let list = [
    {
      author:"Adam Levine",
      stars: 4,
      userId:1,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus."
    },
    {
      author:"Tea Tsintsadze",
      stars: 5,
      userId:2,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus."
    },
    {
      author:"Nino Kudava",
      stars: 3,
      userId:3,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus."
    },
    {
      author:"Tiko Vacheishvili",
      stars: 5,
      userId:4,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus."
    }
  ]
  return (
    <div className="rq-testimonial-section">
      <div className="rq-testimonial-content">
        <h1 className="rq-title">What Clients Say<span className="rq-dot">.</span></h1>
        <div className=" owl-carousel testimonial-wrapper">
          {list.map((testimonial,index)=>
            <Testimonial key={index} userId={testimonial.userId} author={testimonial.author} comment={testimonial.comment} stars={testimonial.stars} />
          )}
        </div>
      </div>
    </div>
  );
}
export default TestimonialsContainer;
