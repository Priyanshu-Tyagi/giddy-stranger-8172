import { NavLink } from "react-router-dom";

export function E1() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src="https://mailtrap.io/wp-content/uploads/2021/06/qa_automation_icon_menu.svg" />
      </div>
      <div>
        <div>QA Automation</div>
        <div>Automation for Email Testing</div>
      </div>
    </div>
  );
}
export function E2() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <img src="https://mailtrap.io/wp-content/uploads/2021/06/check_html_icon_menu.svg" />
        </div>
        <div>
          <div>HTML Check</div>
          <div>Find HTML/CSS issues</div>
        </div>
      </div>
    );
  }
  export function E3() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <img src="https://mailtrap.io/wp-content/uploads/2021/06/fake_smtp_server_icon_menu.svg" />
        </div>
        <div>
          <div>Fake SMTP Server</div>
          <div>Your own SMTP server</div>
        </div>
      </div>
    );
  }
  export function E4() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <img src="https://mailtrap.io/wp-content/uploads/2021/06/api_icon_menu.svg" />
        </div>
        <div>
          <div>Mailtrap API</div>
          <div>Integrate with your application</div>
        </div>
      </div>
    );
  }

//   ITEMS FOR RESOURES


export function R1() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <img width="40px" src="https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-09.svg" />
        </div>
        <div>
          <div>API</div>
          <div>Integrate with existing resources</div>
        </div>
      </div>
    );
  }
  export function R2() {
    return (
      <NavLink to="/case-studies">
        <div style={{ display: "flex" }}>
          <div>
            <img width="40px" src="https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-08.svg" />
          </div>
          <div>
            <div>Case Studies</div>
            <div>Success stories of our customers</div>
          </div>
        </div>
      </NavLink>
    );
  }
  export function R3() {
    return (
      <NavLink to="/blog">
        <div style={{ display: "flex" }}>
          <div>
            <img width="40px" src="https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-07.svg" />
          </div>
          <div>
            <div>Blog</div>
            <div>The best content about emails</div>
          </div>
        </div>
      </NavLink>
    );
  }
  export function R4() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <img width="40px" src="https://mailtrap.io/wp-content/uploads/2022/03/Transactional-Email-Sending_icon-06.svg" />
        </div>
        <div>
          <div>Help</div>
          <div>How-to's and Knowledge base</div>
        </div>
      </div>
    );
  }