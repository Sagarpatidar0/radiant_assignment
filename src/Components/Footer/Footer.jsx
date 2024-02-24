import './Footer.scss'
import { RiArrowDropDownLine } from "react-icons/ri";
function Footer() {
  return (
    <>
     <div className='footer'>
    <div className='category'>
        <h4>CATAGORIES</h4>
        <ul className="list-items">
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
        </ul>
    </div>

<div className='contact'>
    <h4>CONTACT</h4>
    <ul className='list-item2'>
        <li>Contact</li>
        <li>Privacy Policy</li>
        <li>Terms of service</li>
        <li>categories</li>
        <li>About</li>
    </ul>
</div>

<div className='location'>
<h5>United State </h5> 
<i><RiArrowDropDownLine /></i></div>

     </div>

    </>
  )
}

export default Footer