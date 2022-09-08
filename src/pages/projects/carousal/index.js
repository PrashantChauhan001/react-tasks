import React, { useState } from "react";
import { Accordion, Carousel } from "react-bootstrap";

const dummyItem = [
  {
    key: 0,
    accordianString: "Coding History",
    accordianStringClass: "text-primary",
    headerText: "Interesting Things",
    date: "Nov 12",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint, laudantium architecto fugiat sit aspernatur dicta repellat  deleniti! Corporis voluptas aliquid maiores esse, animi llam!",
    imgSrc: "/assets/images/carousel/main01.jpg",
    imgAlt: "main01",
  },
  {
    key: 1,
    accordianString: "Coding Future",
    accordianStringClass: "text-success",
    headerText: "New Era",
    date: "Nov 11",
    body: "Lorem ipsum dolor sit amet consectetur dipisicing elit. Magni perspiciatis libero voluptates fugit tempora nam repellendus fuga ullam, ipsam nulla id vero illum, dolorum amet exercitationem in dolor temporibus",
    imgSrc: "/assets/images/carousel/main02.jpg",
    imgAlt: "main02",
  },
  {
    key: 3,
    accordianString: "Build Web",
    accordianStringClass: "text-primary",
    headerText: "Check Out",
    date: "Nov 12",
    body: "Lorem ipsum dolor sit amet consectetur dipisicing elit. Magni perspiciatis libero voluptates fugit tempora nam repellendus fuga ullam, ipsam nulla id vero illum, dolorum amet exercitationem in dolor temporibus",
    imgSrc: "/assets/images/carousel/main03.jpg",
    imgAlt: "main03",
  },
  {
    key: 4,
    accordianString: "Create Web",
    accordianStringClass: "text-success",
    headerText: "Let's Start",
    date: "Nov 12",
    body: "Lorem ipsum dolor sit amet consectetur dipisicing elit. Magni perspiciatis libero voluptates fugit tempora nam repellendus fuga ullam, ipsam nulla id vero illum, dolorum amet exercitationem in dolor temporibus",
    imgSrc: "/assets/images/carousel/main04.jpg",
    imgAlt: "main04",
  },
];

const Carousal = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <Carousel
        id="carouselExampleCaptions"
        activeIndex={current}
        onSelect={(index, e) => setCurrent(index)}
        fade
      >
        <Carousel.Item className="carousel-item active">
          <img
            src="/assets/images/carousel/laptop3apple.jpg"
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption className="carousel-caption d-none d-md-block">
            <h5>Learn with US</h5>
            <p>Best website for learning</p>
            <button className="btn btn-outline-light">Learn</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            src="/assets/images/carousel/laptop.jpg"
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption className="carousel-caption d-none d-md-block">
            <h5>Code with US</h5>
            <p>Create Your own code and run</p>
            <button className="btn btn-outline-light">Code</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            src="/assets/images/carousel/math1.jpg"
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption className="carousel-caption d-none d-md-block">
            <h5>Build with US</h5>
            <p>Build Websites, Application and Much More</p>
            <button className="btn btn-outline-light">Build</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {dummyItem.map((item) => (
        <AccordionComponent item={item} key={item.key} />
      ))}
    </div>
  );
};

const AccordionComponent = ({ item }) => (
  <Accordion>
    <Accordion.Item eventKey={item.key}>
      <Accordion.Header>
        <strong className={`d-inline-block mb-2 ${item.accordianStringClass}`}>
          {item.accordianString}
        </strong>
      </Accordion.Header>
      <Accordion.Body>
        <div className="d-flex">
          <div className="col p-4 d-flex flex-column position-static">
            <h3 className="mb-0">{item.headerText}</h3>
            <div className="mb-1 text-muted">{item.date}</div>
            <p className="card-text mb-auto">{item.body}</p>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              className="bd-placeholder-img"
              style={{ height: "200px" }}
              src={item.imgSrc}
              alt={item.imgAlt}
            />
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export default Carousal;
