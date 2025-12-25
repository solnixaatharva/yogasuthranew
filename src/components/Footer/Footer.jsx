

const Footer = () => {
   
    return (
        <div className=" bg-[#F9F9F9] ">
            <footer className="footer px-2 py-4 max-w-7xl m-auto  text-base-content">
                <nav className="">
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Private Yoga Event</a>
                    <a className="link link-hover">Yoga Festival Management</a>
                    <a className="link link-hover">Yoga Retreat Planning</a>
                    <a className="link link-hover">Yoga Wellness Program</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;