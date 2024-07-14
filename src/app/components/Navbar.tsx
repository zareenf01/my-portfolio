export default function Navbar() {
  return (
    <div className="flex justify-between items-center pt-3 m-3 sticky">
      <div className="flex">
        <h1 className="font-bold text-[#c76bec] text-5xl ">ZF</h1>
        <span className="font-bold text-white text-5xl">.</span>
      </div>
      <div className="flex items-center">
        <a href="https://github.com/zareenf01" className="mx-2">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/sf-black-filled/40/FFFFFF/github.png"
            alt="github"
          />
        </a>
        <a href="https://twitter.com/ZareenFatima01" className="mx-2">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios-glyphs/35/FFFFFF/twitterx--v2.png"
            alt="twitterx--v2"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/zareen-fatima-476110244/"
          className="mx-2"
        >
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios-glyphs/34/FFFFFF/linkedin.png"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
}
