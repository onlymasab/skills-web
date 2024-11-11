



function Hero() {
  return (
   
    <section className="bg-black h-svh">
      <div className="pt-24 pb-8 px-5">

        {/* Banner top higlight */}
        <div className="flex tex-white mb-8">

          <video  src="https://framerusercontent.com/assets/uwmpDFrG9Nf3wxWJKUCVOzTl9s.mp4" 
              autoPlay  loop  muted className="mr-2" width={28} height={28}>
              Your browser does not support the video tag.
          </video>

          <div className="text-white text-[12px] flex-col">
            <p>Upcoming Batch 2024</p>
            <p className="text-white/60">Admissions now open</p>
          </div>

        </div>

        {/* Hero Text */}
        <div className="text-white mb-8">
          <h1 className="text-[32px] mb-3 font-medium leading-tight tracking-tighter">The next Generation of Learning Platform.</h1>
          <p className="text-white/60 text-balance text-base leading-5 tracking-tight">Professional Cerfitificates offer flexible, online training designed to support your career growth.</p>
        </div>

        {/* Hero Button */}
        <div className="">
            <button className="bg-[#0099FF] rounded-xl mb-5 text-sm text-white px-5 py-3">Get Certificate</button>
            <button className="flex text-white text-sm justify-center my-auto"> <svg className="mr-3" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18.5C13.9706 18.5 18 14.4706 18 9.5C18 4.52944 13.9706 0.5 9 0.5C4.02944 0.5 0 4.52944 0 9.5C0 14.4706 4.02944 18.5 9 18.5ZM6.9 14.8694L14.7 10.366C15.3667 9.98112 15.3667 9.01887 14.7 8.63397L6.9 4.13064C6.23333 3.74574 5.4 4.22687 5.4 4.99667L5.4 14.0033C5.4 14.7731 6.23333 15.2543 6.9 14.8694Z" fill="white"/>
              </svg> <span>Watch Video</span>
            </button>

        </div>

      </div>
    </section>
   
  );
}

export default Hero;
