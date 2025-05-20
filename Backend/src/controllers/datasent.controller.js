export const dataSent = (req, res) => {
  const dummyData = {
    message: "This is dummy data",
    timestamp: new Date(),
    data: [
     {
      id: 1,
      quote: "Understated, but unforgettable. It feels like it was made for me",
      author: "Random Woman",
      location: "NY, USA",
      avatar: "/images/img_ellipse_3.png"
    },
    {
      id: 2,
      quote: "The quality and attention to detail is exceptional. Worth every penny.",
      author: "Fashion Enthusiast",
      location: "London, UK",
      avatar: "/images/img_ellipse_4.png"
    },
    {
      id: 3,
      quote: "Elegant simplicity that stands out in a crowd. My new favorite piece.",
      author: "Style Connoisseur",
      location: "Paris, France",
      avatar: "/images/img_ellipse_5.png"
    }
    ],
  };
  return res.status(200).json(dummyData);
};
