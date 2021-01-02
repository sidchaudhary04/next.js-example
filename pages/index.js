import Link from 'next/link'

export default function IndexPage() {
  return (
	<head>
    <noscript>
        <style type="text/css">
            [data-aos] {
                opacity: 1 !important;
                transform: translate(0) scale(1) !important;
            }
            nav{
            opacity:1 !important;
            z-index: 100 !important;
            }
            
        </style>
    </noscript>
</head>
<link href="/tailwind.css" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
     window.onscroll = () => {
  const nav = document.querySelector('nav');
  if(this.scrollY <= 10) nav.className = 'w-full top-0 fixed bg-white nav flex flex-wrap items-center justify-between px-4'; else nav.className = 'shadow-xl w-full top-0 fixed bg-white nav flex flex-wrap items-center justify-between px-4 ';
};
  </script>
  <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="siddharthone" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting. You can now buy me a coffee!" data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@tailwindcss/typography@0.2.x/dist/typography.min.css"
/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 <meta charset="UTF-8">
<meta property="og:locale" content="en_GB">
<meta property="og:type" content="website">
	<meta content="Siddharth Chaudhary" property="og:title">
	<meta property="og:description" content="Hi, I'm Siddharth and I like coding, blogging and stuff">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
<meta name="google-site-verification" content="_0ERTB2UKtf_RyfkvIfTZooYYazuCCmWY-hUjvtrE3o" />
</head>
<title>Siddharth Chaudhary</title>
<link rel="shortcut icon" type="image/png" href="/favicon.png"/>
<style>
html{
-webkit-tap-highlight-color: transparent; /* for removing the highlight */
}
:root {
color-scheme: light dark;
}


@media (prefers-color-scheme: dark) {
  html{
  background:#1B1C1E !important;
  }
  p,a,li, * {
  color:white !important;
  }
  .bg-white{
background-color:#1B1C1E !important;
}
  .google234{background:#111827 !important;}
}
.text-green-500{
color:#10B981 !important;
}
@media (max-width: 767px) {
  .navicon {
    width: 1.125em;
    height: .125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .2s ease-out;
    content: '';
    background: #3D4852;
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu {
  
    display: none;
  }

  .menu-btn:checked ~ .menu {
    display: block;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon::before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::before,
  .menu-btn:checked ~ .menu-icon .navicon::after {
    top: 0;
  }
}
body { 
    padding-top: 40px; 
}

</style>
<nav class="w-full top-0 fixed bg-white nav flex flex-wrap items-center justify-between px-4">
  <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
    <button onclick="window.history.pushState({}, 'Title', '/about');" class="font-semibold text-xl tracking-tight text-green-500">Siddharth Chaudhary</button>
  </div>

  <input class="menu-btn hidden" type="checkbox" id="menu-btn">
  <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span class="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

  <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li class="border-t md:border-none">
      <a href="#" class="font-bold border-b-4 border-green-500 block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Home</a>
    </li>
    <li class="border-t md:border-none">
      <a href="/about" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About</a>
    </li>
     <li class="border-t md:border-none">
      <a href="/contact" target=_self class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Contact</a>
    </li>
    <li class="border-t md:border-none">
      <a href="https://blog.siddharth.one/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Blog</a>
    </li>
    <li class="border-t md:border-none">
      <a href="https://design.siddharth.one/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Design</a>
    </li>
  </ul>
</nav>
<section style="background:#F1F7F9" class="google234 text-gray-700 body-font">
  <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <article class="prose">
      <h1 data-aos="fade-up" >Hey &#128075; I'm Sid
      </h1><p data-aos="fade-up" class="lead">I'm a tech enthusiast and blogger and like pixel perfect UI</p>
      </article>
      <br>

      <div class="flex justify-center">
        <a data-aos="fade-up" href=/about class="shadow-xl hover:shadow-md inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">About</a>
        <a data-aos="fade-up" href="https://blog.siddharth.one" class="shadow-xl hover:shadow-md ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Blog</a>
      </div>
    </div>
  </div>
</section>
<section id="blog" class="text-gray-700 body-font overflow-hidden">

  <div class="container px-5 py-6 mx-auto">
    <div class="-my-8">
    
      <div class="py-8 flex flex-wrap md:flex-no-wrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span data-aos="fade-up" class="tracking-widest font-medium title-font text-gray-900">BLOG</span>
          <span data-aos="fade-up" class="mt-1 text-gray-500 text-sm">December 24th</span>
        </div>
        <div class="md:flex-grow">
          <a href="https://blog.siddharth.one/email-alias" data-aos="fade-up" class="text-2xl font-medium text-gray-900 title-font mb-2">How to get free business email with Google Domains</a>
          <p data-aos="fade-up" class="leading-relaxed">Have you bought a domain on Google domains? Wondering if you should pay for GSuite email. You don't need to...</p>
          <a data-aos="fade-up" class="text-green-500 inline-flex items-center mt-4" href="https://blog.siddharth.one/email-alias">Read
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="#10B981" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span data-aos="fade-up" class="tracking-widest font-medium title-font text-gray-900">BLOG</span>
          <span data-aos="fade-up" class="mt-1 text-gray-500 text-sm">December 23rd</span>
        </div>
        <div class="md:flex-grow">
          <a href="https://blog.siddharth.one/the-one-tld" data-aos="fade-up" class="text-2xl font-medium text-gray-900 title-font mb-2">Why I think the .one domain ending is the best alternative</a>
          <p data-aos="fade-up" class="leading-relaxed">These days, it is very likely that all popular domain endings (co, com, org, io ...) for your first name are probably gone if you have a popular name like me &#128514;...</p>
          <a data-aos="fade-up" href="https://blog.siddharth.one/the-one-tld" class="text-green-500 inline-flex items-center mt-4">Read
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="#10B981" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span data-aos="fade-up" class="tracking-widest font-medium title-font text-gray-900">MEDIUM</span>
          <span data-aos="fade-up" class="mt-1 text-gray-500 text-sm">December 6th</span>
        </div>
        <div class="md:flex-grow">
          <a href="https://siddharth-chaudhary.medium.com/why-you-should-have-both-medium-and-your-own-blog-98406f295257" data-aos="fade-up" class="text-2xl font-medium text-gray-900 title-font mb-2">Why you should have both Medium AND your own blog</a>
          <p data-aos="fade-up" class="leading-relaxed">Sorry about my first post. You shouldn’t really need to consider platform you should use for blogging...</p>
          <a data-aos="fade-up" href="https://siddharth-chaudhary.medium.com/why-you-should-have-both-medium-and-your-own-blog-98406f295257" class="text-green-500 inline-flex items-center mt-4">Read
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="#10B981" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span data-aos="fade-up" class="tracking-widest font-medium title-font text-gray-900">BLOG</span>
          <span data-aos="fade-up" class="mt-1 text-gray-500 text-sm">December 19th</span>
        </div>
        <div class="md:flex-grow">
          <a href="https://blog.siddharth.one/adding-dark-mode" data-aos="fade-up" class="text-2xl font-medium text-gray-900 title-font mb-2">How I updated my website to work with dark mode</a>
          <p data-aos="fade-up" class="leading-relaxed">I recently managed to update my website to work with ios dark mode, and it was fairly easy. I hope this ...</p>
          <a data-aos="fade-up" href="https://blog.siddharth.one/adding-dark-mode" class="text-green-500 inline-flex items-center mt-4">Read
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="#10B981" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      </div>
</section>
<section class="text-gray-700 body-font">
  <div class="container px-5 py-6 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      
      
      <a data-aos="fade-up" href="https://blog.siddharth.one" class="text-bold text-green-500 leading-relaxed text-lg">Read more &rarr;</a>
      
    </div>
  </div>
  </section>
<footer style="background:#F1F7F9" class="google234 text-gray-700 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span class="ml-3 text-xl">Siddharth</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Siddharth Chaudhary —
      <a href="https://siddharth.one/privacy" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Privacy Policy</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://github.com/sidchaudhary04" class="text-gray-500">
       
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>
      <a href="https://twitter.com/sidchaudhary04" class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a href="https://instagram.com/sidchaudhary04" class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <!--a class="ml-3 text-gray-500"-->
        <!--svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24"-->
          <!--path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"--><!--/path!-->
          <!--circle cx="4" cy="4" r="2" stroke="none"!--><!--/circle-->
        <!--/svg-->
      <!--/a-->
    </span>
  </div>
</footer>

  )
}
