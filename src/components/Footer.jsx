function Footer() {
  return (
    <footer className="flex items-center justify-center bg-gray-700 px-8 py-4 text-white">
      <div className="flex items-center space-x-2 text-lg font-semibold">
        <div className="">
          <a
            href="https://github.com/ForkEyeee"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 hover:underline"
          >
            <span>ForkEyeee</span>
            <img
              src="/assets/icons/github.png"
              alt="github-image"
              className="h-8 w-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
