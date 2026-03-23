export default function Loader({ visible }) {
  return (
    <div className={`loader ${visible ? '' : 'hide-loader'}`} id="spinner">
      <svg
        id="logoload"
        width="152"
        height="151"
        viewBox="0 0 152 151"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M136.484 149.574L1 149.574L1 14.0898L136.484 149.574Z"
          stroke="#333333"
          strokeWidth="2"
        />
        <path
          d="M151 1.0005L15.5161 1.0005L151 136.484V49.3333H109.766"
          stroke="#333333"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
