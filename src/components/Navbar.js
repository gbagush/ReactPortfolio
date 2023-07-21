import logo from '../assets/logo.svg';

export default function Navbar() {
    return (
    <div className='fixed z-50 bg-black w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={logo} className="App-logo w-10 rounded-full" alt="logo" />
            <a href="https://www.africau.edu/images/default/sample.pdf" rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border border-4">Resume</a>
        </div>
    </div>
    )
}
