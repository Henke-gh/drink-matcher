import "./ToTop.css";

export default function ToTop() {
  return (
    <div className="toTop">
      <a href="#top">
        <svg
          className="toTopIcon"
          width="72"
          height="62"
          viewBox="0 0 72 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="28.7869"
            y="7.85786"
            width="10"
            height="50"
            transform="rotate(-45 28.7869 7.85786)"
            fill="#242424"
          />
          <path
            d="M35.3553 1L42.4264 8.07107L7.07108 43.4264L8.22544e-06 36.3553L35.3553 1Z"
            fill="#242424"
          />
          <rect
            x="28.7869"
            y="25.8579"
            width="10"
            height="50"
            transform="rotate(-45 28.7869 25.8579)"
            fill="#242424"
          />
          <rect
            x="35.3553"
            y="19"
            width="10"
            height="50"
            transform="rotate(45 35.3553 19)"
            fill="#242424"
          />
        </svg>
      </a>
    </div>
  );
}
