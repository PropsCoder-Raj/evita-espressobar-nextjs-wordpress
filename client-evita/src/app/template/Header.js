export default function HeaderComponent() {
    return (
        <>
            <div id="header">
                <div class="header-top">
                    <div class="container">
                        <div class="row justify-content-end">
                            <div class="col-lg-8 col-sm-4 col-8 header-top-right no-padding">
                                <ul>
                                    <li>
                                        Mon-Fri: 7:30am to 6:30pm
                                    </li>
                                    <li>
                                        Sat: 9am to 6:30pm | Sun: 9am to 6:30pm
                                    </li>
                                    <li>
                                        <a href="tel:+47 932 57 343">+47 932 57 343</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="banner-area" id="home">
                <div class="container">
                    <div class="row fullscreen d-flex align-items-center justify-content-start">
                        <div class="banner-content col-lg-7">
                            <h6 class="text-white text-uppercase">Now you can feel the Energy</h6>
                            <h1>
                                Start your day with <br />
                                a black Coffee
                            </h1>
                            <a href="#" class="primary-btn text-uppercase">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}