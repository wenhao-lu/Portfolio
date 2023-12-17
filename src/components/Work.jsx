import "../App.css";

export default function WorkList() {

  return (
    <div className="workWrap" id="work">
      <div className="workText">Work Experience</div>

{/* work 1 */}
<div className="workContainer">
    <div className="workCard">

      <div className="workDetails">
        <div>
          <p className="workCompany">Unisync Group Limited</p>
          <p className="workTitle">Electronic Store Front Assistant (Intern Jul-Aug 2023)</p>
        </div>
        <div className="workStack">
          <span className="stack">Shopify</span>
          <span className="stack">Wordpress</span>
          <span className="stack">e-commerce</span>
          <span className="stack">Teamwork</span>
        </div>
        <div className="workStack">
          <span className="stack">PHP</span>
          <span className="stack">HTML</span>
          <span className="stack">Liquid</span>
          <span className="stack">JavaScript</span>
          <span className="stack">Data Management</span> 
        </div>
      </div>

      <div className="workImg">
        <a href="https://unisyncdemo.wlkevin.com/" target="_blank">
          <img className="work-image" src="assets/images/unisync.png" alt="work-image"/>
        </a>

      </div>

    </div>
    <div className="workContent">
        <p className="projectText1">&#10095; Re-designed company website on WordPress, leveraging PHP, jQuery and Figma to create a customized user interface</p>
        <p className="projectText2">&#10095; Managed E-stores on Shopify, customized front pages for clients using HTML, CSS, JavaScript and Liquid</p>
        <p>&#10095; Administered data for renowned clients across 70+ E-stores, ensuring seamless and efficient e-commerce operations</p>
    </div>
  </div>

  </div>

  

  );
}
