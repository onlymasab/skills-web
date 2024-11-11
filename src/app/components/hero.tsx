import Button from "./buttons";





function Hero() {
  return (
   
    <section className="bg-black h-auto max-w-screen-ll">
      <div className="pt-24 pb-8 px-5 tb:flex tb:gap-8">
      {/* Right Side Hero */}
        <div>
              {/* Banner top higlight */}
              <div className="flex tex-white mb-8">

                <video  src="https://framerusercontent.com/assets/uwmpDFrG9Nf3wxWJKUCVOzTl9s.mp4" 
                    autoPlay  loop  muted className="mr-4" width={28} height={28}>
                    Your browser does not support the video tag.
                </video>

                <div className="text-white text-[12px] flex-col">
                  <p>Upcoming Batch 2024</p>
                  <p className="text-white/60">Admissions now open</p>
                </div>

              </div>

              {/* Hero Text */}
              <div className="text-white mb-8">
                <h1 className="text-[32px] mm:text-[42px] mb-3 font-medium leading-tight tracking-tighter">The next Generation of Learning Platform.</h1>
                <p className="text-white/60 text-balance text-base leading-5 tracking-tight">Professional Cerfitificates offer flexible, online training designed to support your career growth.</p>
              </div>

              {/* Hero Button */}
              <div className="flex items-center space-x-4">
                {/* <!-- Get Certificate Button --> */}
                <button className="bg-[#0099FF] rounded-xl text-sm text-white px-5 py-3">Get Certificate</button>

                {/* <!-- Watch Video Button --> */}
                <button className="flex items-center text-white text-sm justify-center">
                  <svg className="mr-3" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18.5C13.9706 18.5 18 14.4706 18 9.5C18 4.52944 13.9706 0.5 9 0.5C4.02944 0.5 0 4.52944 0 9.5C0 14.4706 4.02944 18.5 9 18.5ZM6.9 14.8694L14.7 10.366C15.3667 9.98112 15.3667 9.01887 14.7 8.63397L6.9 4.13064C6.23333 3.74574 5.4 4.22687 5.4 4.99667L5.4 14.0033C5.4 14.7731 6.23333 15.2543 6.9 14.8694Z" fill="white"/>
                  </svg>
                  <span>Watch Video</span>
                </button>
              </div>
        </div>
        {/* Social Button Card */}
        <div className="mt-8 tb:max-w-[356px] tb:bg-white/10 tb:px-8 tb:py-8 rounded-3xl tb:border tb:border-white/30 tb:mt-auto">
            <h3 className="text-white text-center mb-4">Get 7 free days Online Session </h3>
           <button className="cursor-pointer mb-3 flex items-center justify-start w-full px-8 py-2 text-white border border-gray-300 rounded-md ">
             <svg className="flex mr-4" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_134_33)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.64 9.20442C17.64 8.56624 17.5827 7.95262 17.4764 7.36353H9V10.8449H13.8436C13.635 11.9699 13.0009 12.9231 12.0477 13.5613V15.8194H14.9564C16.6582 14.2526 17.64 11.9453 17.64 9.20442Z" fill="#4285F4"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.96409 10.7101C3.78409 10.1701 3.68182 9.59325 3.68182 9.00007C3.68182 8.40689 3.78409 7.83007 3.96409 7.29007V4.95825H0.957273C0.347727 6.17325 0 7.5478 0 9.00007C0 10.4523 0.347727 11.8269 0.957273 13.0419L3.96409 10.7101Z" fill="#FBBC05"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z" fill="#FF4500"/></g><defs>
                <clipPath id="clip0_134_33"><rect width="20" height="18" fill="white"/></clipPath></defs>
              </svg>
              <span className="flex">Continue with Google</span>
            </button>

            <button className="cursor-pointer mb-3 flex items-center justify-start w-full pl-8 pr-4 py-2 text-white border border-gray-300 rounded-md ">
             
              <svg className="mr-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_134_40)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20 10.0611C20 4.50451 15.5229 0 10 0C4.47715 0 0 4.50451 0 10.0611C0 15.0829 3.65686 19.2452 8.4375 20V12.9694H5.89844V10.0611H8.4375V7.84452C8.4375 5.32296 9.93043 3.93012 12.2146 3.93012C13.3087 3.93012 14.4531 4.12663 14.4531 4.12663V6.60261H13.1921C11.9499 6.60261 11.5625 7.37816 11.5625 8.17381V10.0611H14.3359L13.8926 12.9694H11.5625V20C16.3431 19.2452 20 15.0829 20 10.0611Z" fill="#1877F2"/>
                  </g> <defs> <clipPath id="clip0_134_40"> <rect width="20" height="20" fill="white"/> </clipPath> </defs>
              </svg>
              <span className="flex">Continue with Facebook</span>
            </button>

            <button className="cursor-pointer flex items-center justify-start w-full px-8 py-2 text-white border border-gray-300 rounded-md ">
                <svg className="mr-4" width="20" height="20" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 14.673C16.3712 16.573 14.4888 19.9373 12.5496 19.974C11.2632 19.9998 10.8496 19.1798 9.3792 19.1798C7.9096 19.1798 7.4496 19.949 6.2336 19.999C4.176 20.0815 1 15.143 1 10.8362C1 6.88022 3.6464 4.91933 5.9584 4.88349C7.1984 4.86016 8.3696 5.75435 9.1256 5.75435C9.8848 5.75435 11.3072 4.67932 12.8024 4.83682C13.428 4.86432 15.1856 5.09933 16.3136 6.81772C13.3208 8.85279 13.7872 13.1088 17 14.673ZM12.8224 0C10.5616 0.0950031 8.7168 2.56592 8.9744 4.60932C11.064 4.77849 13.0688 2.33841 12.8224 0Z" fill="#fff"/>
                </svg>
              <span className="flex">Continue with Apple</span>
            </button>

            <button className="cursor-pointer my-4 text-[#0099FF] flex items-center text-center justify-center w-full px-8 py-2">   
              Continue with Email
            </button>

            <p className="leading-[15px] text-white/60 text-center text-xs text-pretty">By signing up you agree to Skiills <span className="font-medium text-white">Terms of 
          Service</span> and <span className="text-white font-medium">Privacy Policy</span>, and agree to receive marketing communications from skiills at the email address provided. This page is protected by reCAPTCHA and is subject to Google’s <span className="text-white font-medium"> Terms of Service </span> and <span className="text-white font-medium">Privacy Policy </span> .</p>
      
        </div>
      </div>
    </section>
   
  );
}

export default Hero;
