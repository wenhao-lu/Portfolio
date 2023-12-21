import "../App.css";

export default function WorkList() {

  return (
  
    <div className="workWrap" id="work">
      <div className="workHr">
        <i class="fab fa-android"></i>
        <i class="fab fa-android"></i>
        <i class="fab fa-android"></i>
      </div>
      <div className="workText">Work Experience</div>

{/* work 1 */}
<div className="workContainer">
    <div className="workCard">
      
      <div className="workDetails">

        <div>
          <div className="workCompanyWrap">
            <p className="workCompany">Unisync Group Limited</p>
            <img className="companyLogo" src="assets/logo/unisyncLogo.webp" alt="company-logo"/>
          </div>
          <div className="workHr2"><hr></hr></div>
          <p className="workTitle">Electronic Store Front Assistant<br></br>Intern Jul-Aug 2023</p>
        </div>
        <div>
        <div className="workStack">
          <span>Shopify</span>
          <span>Wordpress</span>
          <span>e-commerce</span>
          <span>Teamwork</span>
        </div>
        <div className="workStack">
          <span>PHP</span>
          <span>HTML</span>
          <span>Liquid</span>
          <span>JavaScript</span>
          <span>Data Management</span> 
        </div>
        </div>
      </div>

      <div className="workImg">
        <a href="https://unisyncdemo.wlkevin.com/" target="_blank">
          <img className="work-image" src="assets/images/unisync.png" alt="work-image"/>
          <i className="fas fa-globe unisyncLink"></i>
        </a>
      </div>

    </div>
    <div className="workContent">
        <p className="projectText1">&#10095; Designed and developed company website with WordPress, leveraging PHP, jQuery and Figma to create a customized visually appealing user interface</p>
        <p className="projectText2">&#10095; Developed E-stores on Shopify, customized websites according to clients specifications, using HTML, CSS, JavaScript and Liquid</p>
        <p>&#10095; Administered and maintained E-stores for over 70 renowned clients, ensuring seamless e-commerce operations</p>
    </div>
  </div>

  </div>

  

  );
}
