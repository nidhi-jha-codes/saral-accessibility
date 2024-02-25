// Set up icon of extension
const extensionIcon = document.createElement("img");
extensionIcon.src = chrome.runtime.getURL("icons/saral_128.png");
extensionIcon.style.cssText = `
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  z-index: 100000;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background: white
`;

// Dialog box 
const popup = document.createElement("div");
popup.style.cssText = `
  display: none;
  position: fixed;
  width: 300px;
  min-height: 250px;
  max-height: 600px;
  overflow: auto;
  bottom: 60px;
  right: 10px;
  color: #333333;
  border: none;
  border-radius: 8px;
  z-index: 100001;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  line-height: 1.4;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(10, 10, 10, 0.43);
  transition: max-height 1s ease-out;
`;

// Dialog Option
popup.innerHTML = `
<div id="popup-container" style="text-align: center; font-size: 14px; transition: max-height 1s ease-out;">
<div style="margin-bottom: 20px;">
  <label for="language-opted" style="display: block; margin-bottom: 10px;">
    <span style="font-weight: bold;">Explain this in</span>
  </label>
  <select id="language-opted" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);">
    <option value="English">English</option>
    <option value="Hindi">Hindi</option>
    <option value="Spanish">Spanish</option>
    <option value="French">French</option>
    <option value="Chinese">Chinese</option>
    <option value="Japanese">Japanese</option>
  </select>
</div>
<div style="margin-bottom: 20px;">
  <label for="text-complexity" style="display: block; margin-bottom: 10px;">
    <span style="font-weight: bold;">Considering I am a</span>
  </label>
  <select id="text-complexity" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ddd; box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);">
    <option value="1st Grade">1st Grader</option>
    <option value="5th Grade">5th Grader</option>
    <option value="9th Grade">9th Grader</option>
    <option value="11th Grade">11th Grader</option>
    <option value="College Student">College Student</option>
    <option value="College Professor">College Professor</option>
  </select>
</div>
<button id="btn-simplify" style="width: 100%; padding: 10px 20px; border-radius: 5px; border: none; background-color: #fb6f92; color: white; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2); font-weight: bold;">Simplify</button>
<details>
  <summary>Privacy Policy</summary>
  <div style="text-align: left; font-size: 0.6em">
  <p>Last updated: February 25, 2024</p>
  <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
  <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" target="_blank">Free Privacy Policy Generator</a>. </p>
  <h2>Interpretation and Definitions</h2>
  <h3>Interpretation</h3>
  <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
  <h3>Definitions</h3>
  <p>For the purposes of this Privacy Policy:</p>
  <ul>
    <li>
      <p>
        <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
      </p>
    </li>
    <li>
      <p>
        <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
      </p>
    </li>
    <li>
      <p>
        <strong>Application</strong> refers to Saral, the software program provided by the Company.
      </p>
    </li>
    <li>
      <p>
        <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Saral.
      </p>
    </li>
    <li>
      <p>
        <strong>Country</strong> refers to: New Jersey, United States
      </p>
    </li>
    <li>
      <p>
        <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
      </p>
    </li>
    <li>
      <p>
        <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
      </p>
    </li>
    <li>
      <p>
        <strong>Service</strong> refers to the Application.
      </p>
    </li>
    <li>
      <p>
        <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
      </p>
    </li>
    <li>
      <p>
        <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
      </p>
    </li>
    <li>
      <p>
        <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
      </p>
    </li>
  </ul>
  <h2>Collecting and Using Your Personal Data</h2>
  <h3>Types of Data Collected</h3>
  <h4>Personal Data</h4>
  <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
  <ul>
    <li>Usage Data</li>
  </ul>
  <h4>Usage Data</h4>
  <p>Usage Data is collected automatically when using the Service.</p>
  <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
  <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
  <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
  <h3>Use of Your Personal Data</h3>
  <p>The Company may use Personal Data for the following purposes:</p>
  <ul>
    <li>
      <p>
        <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
      </p>
    </li>
    <li>
      <p>
        <strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
      </p>
    </li>
    <li>
      <p>
        <strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
      </p>
    </li>
    <li>
      <p>
        <strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
      </p>
    </li>
    <li>
      <p>
        <strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
      </p>
    </li>
    <li>
      <p>
        <strong>To manage Your requests:</strong> To attend and manage Your requests to Us.
      </p>
    </li>
    <li>
      <p>
        <strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
      </p>
    </li>
    <li>
      <p>
        <strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
      </p>
    </li>
  </ul>
  <p>We may share Your personal information in the following situations:</p>
  <ul>
    <li>
      <strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
    </li>
    <li>
      <strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
    </li>
    <li>
      <strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
    </li>
    <li>
      <strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.
    </li>
    <li>
      <strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
    </li>
    <li>
      <strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.
    </li>
  </ul>
  <h3>Retention of Your Personal Data</h3>
  <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
  <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
  <h3>Transfer of Your Personal Data</h3>
  <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
  <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
  <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
  <h3>Delete Your Personal Data</h3>
  <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
  <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
  <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
  <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
  <h3>Disclosure of Your Personal Data</h3>
  <h4>Business Transactions</h4>
  <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
  <h4>Law enforcement</h4>
  <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
  <h4>Other legal requirements</h4>
  <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
  <ul>
    <li>Comply with a legal obligation</li>
    <li>Protect and defend the rights or property of the Company</li>
    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
    <li>Protect the personal safety of Users of the Service or the public</li>
    <li>Protect against legal liability</li>
  </ul>
  <h3>Security of Your Personal Data</h3>
  <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
  <h2>Children's Privacy</h2>
  <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
  <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
  <h2>Links to Other Websites</h2>
  <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
  <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
  <h2>Changes to this Privacy Policy</h2>
  <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
  <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
  <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
  <h2>Contact Us</h2>
  <p>If you have any questions about this Privacy Policy, You can contact us:</p>
  <ul>
    <li>By email: help@help.com</li>
  </ul>
  </div>
</details>
</div>
`;

document.body.appendChild(extensionIcon);
document.body.appendChild(popup);

const style = `
.highlight {background: yellow}
detail > h2 { font-size: 0.7em}
`

let styleSheet = document.createElement("style")
styleSheet.innerText = style
document.head.appendChild(styleSheet)

// Setup action for pop up window
extensionIcon.addEventListener("click", (event) => {
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
  event.stopPropagation();
});

popup.addEventListener("click", (event) => {
  event.stopPropagation();
});

// OpenAI translates the selected text based on language and reading level
// Note: !!! the API_KEY is a private key, replace with your own OPENAI API KEY
const API_KEY = "‼️XXXXXXXX----⚠️---YOUR API KEY---⚠️----XXXXXXX‼️";

var text = "";
let language = "";
let level = "";

// get the output text after clicking the submit button
document.getElementById("btn-simplify").addEventListener("click", async function () {
  language = document.getElementById("language-opted").value;
  languageComplexity = document.getElementById("text-complexity").value;
  const selection = window.getSelection();
  const selectedText = selection.toString();
  if (selectedText.toString().length > 0) {
    console.log("Selected text:", selection.toString());
    let range = selection.getRangeAt(0);
    range.deleteContents();

    // Create placeholder for loader text
    var span = document.createElement("span");

    // Set up loading animation
    span.innerHTML =
      '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_VpEe{animation:spinner_vXu6 1.2s cubic-bezier(0.52,.6,.25,.99) infinite}.spinner_eahp{animation-delay:.4s}.spinner_f7Y2{animation-delay:.8s}@keyframes spinner_vXu6{0%{r:0;opacity:1}100%{r:11px;opacity:0}}</style><circle class="spinner_VpEe" cx="12" cy="12" r="0"/><circle class="spinner_VpEe spinner_eahp" cx="12" cy="12" r="0"/><circle class="spinner_VpEe spinner_f7Y2" cx="12" cy="12" r="0"/></svg>' +
      "Loading text " +
      "in <strong>" +
      language +
      "</strong> at <strong>" +
      languageComplexity +
      "</strong> reading level...<br><br>";

    // Insert the span element into the range
    range.insertNode(span);


    let message = [
      {
        role: "system",
        content:
          "Your job is to translate text to " +
          language +
          " at the following reading level: " +
          languageComplexity,
      },
      { role: "user", content: selectedText },
    ];

    try {
      let response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: message,
          }),
        }
      );
      let data = await response.json();

      if (data && data.choices && data.choices.length > 0) {
        let newNode = document.createElement("span");
        newNode.classList.add("highlight");
        let response1 = data.choices[0].message.content;
        range.deleteContents();
        range.insertNode(document.createTextNode(response1));
        range.surroundContents(newNode)
      }
    } catch (error) {
      console.log("Error");
    }
    console.log(
      "Language chosen is: ",
      language,
      "Language Complexity is: ",
      languageComplexity
    );
  }
});