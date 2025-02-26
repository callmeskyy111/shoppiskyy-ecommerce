import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Classic Blue Jeans",
      price: 80,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Classic Blue Jeans",
        },
      ],
    },
    {
      _id: "3",
      name: "Casual White T-Shirt",
      price: 25,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Casual White T-Shirt",
        },
      ],
    },
    {
      _id: "4",
      name: "Elegant Black Dress",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Elegant Black Dress",
        },
      ],
    },
    {
      _id: "5",
      name: "Comfortable Sneakers",
      price: 90,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Comfortable Sneakers",
        },
      ],
    },
    {
      _id: "6",
      name: "Formal Suit",
      price: 300,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Formal Suit",
        },
      ],
    },
    {
      _id: "7",
      name: "Summer Hat",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Summer Hat",
        },
      ],
    },
    {
      _id: "8",
      name: "Leather Belt",
      price: 60,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Leather Belt",
        },
      ],
    },
  ];

  function handleMouseDown(evt) {
    setIsDragging(true);
    setStartX(evt.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }

  function handleMouseMove(evt) {
    if (!isDragging) return;
    const x = evt.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }

  function handleMouseUpOrLeave() {
    setIsDragging(false);
  }

  function scrollFx(direction) {
    const scrollAmt = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmt, behaviour: "smooth" });
  }

  // Update Scroll Btns.
  function updateScrollButtons() {
    //const container = scrollRef.current;
    const container = scrollRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
    // console.log({
    //   scrollLeft: container.scrollLeft,
    //   clientWidth: container.clientWidth,
    //   containerScrollWidth: container.scrollWidth,
    //   offsetLeft: scrollRef.current.scrollLeft,
    // });
  }

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const updateScrollButtons = () => {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      };

      // Initial check
      updateScrollButtons();

      // Add scroll event listener
      container.addEventListener("scroll", updateScrollButtons);

      // Cleanup event listener on unmount
      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>
        {/* Scroll Btns. */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scrollFx("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-white text-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}>
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scrollFx("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}>
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      {/* SCROLLABLE CONTENT */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}>
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.images[0]?.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
