import { c as create_ssr_component, f as each, h as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger.js";
class Skill {
  name;
  skill;
  imageUrl;
  constructor(name, skill, imageUrl = void 0) {
    this.name = name;
    this.skill = skill;
    this.imageUrl = imageUrl;
  }
}
const Skills_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".wrapper.s-lIcpYhzVuczm.s-lIcpYhzVuczm{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.layout.s-lIcpYhzVuczm.s-lIcpYhzVuczm{display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap;width:100%}.skill-group.s-lIcpYhzVuczm.s-lIcpYhzVuczm{width:30%;padding:20px 50px;border-radius:20px;border:2px solid #4f378b;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;box-shadow:0 0 10px 0 #4f378b;background-color:rgba(79, 55, 139, 0.1);transition:0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);transition-property:scale, background-color}.skill-group.s-lIcpYhzVuczm h2.s-lIcpYhzVuczm{font-size:1.5rem;font-weight:500;letter-spacing:1px;text-align:center;margin-bottom:1rem}.skill-group.s-lIcpYhzVuczm.s-lIcpYhzVuczm:hover{box-shadow:0 0 10px 0 #4f378b;background-color:rgba(79, 55, 139, 0.2);scale:1.05 !important}.skill-group.s-lIcpYhzVuczm.s-lIcpYhzVuczm:nth-child(2){margin-block:1rem}.skill-group.s-lIcpYhzVuczm.s-lIcpYhzVuczm:nth-child(1){opacity:0;transform:translateY(500px)}.skill-group.s-lIcpYhzVuczm.s-lIcpYhzVuczm:nth-child(2){opacity:0;transform:translateY(1000px)}.skill-group.s-lIcpYhzVuczm.s-lIcpYhzVuczm:nth-child(3){opacity:0;transform:translateY(1500px)}.skills.s-lIcpYhzVuczm.s-lIcpYhzVuczm{display:flex;flex-wrap:wrap;width:100%;justify-content:space-evenly;align-items:center}.skills.s-lIcpYhzVuczm>.s-lIcpYhzVuczm{margin:1.5rem}.skill.s-lIcpYhzVuczm.s-lIcpYhzVuczm{display:flex;flex-direction:column;justify-content:center;align-items:center;transition:all 400ms cubic-bezier(0.165, 0.84, 0.44, 1)}.skill.s-lIcpYhzVuczm img.s-lIcpYhzVuczm{width:3rem;height:4rem;aspect-ratio:1;object-fit:scale-down}.skill.s-lIcpYhzVuczm p.s-lIcpYhzVuczm{text-align:center;font-size:1.2rem;letter-spacing:1px;transition:all 400ms cubic-bezier(0.165, 0.84, 0.44, 1)}.skill.s-lIcpYhzVuczm.s-lIcpYhzVuczm:hover{transform:scale(1.2)}.skill.s-lIcpYhzVuczm:hover p.s-lIcpYhzVuczm{letter-spacing:2px}@media(width <= 800px){.layout.s-lIcpYhzVuczm.s-lIcpYhzVuczm{display:flex;flex-direction:column;align-content:center;width:100%}.skill-group.s-lIcpYhzVuczm.s-lIcpYhzVuczm{margin-block:1rem !important}.skill.s-lIcpYhzVuczm.s-lIcpYhzVuczm{text-align:center}}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let frontendSkills = [
    new Skill("Angular", 8, "https://angular.io/assets/images/logos/angular/angular.svg"),
    new Skill("Javascript", 5.5, "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"),
    new Skill("Typescript", 6, "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"),
    new Skill("HTML", 6, "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"),
    new Skill("CSS", 6, "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"),
    new Skill("Git", 8, "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg")
  ];
  let backendSkills = [
    new Skill("C#", 9.5, "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"),
    new Skill("Javascript", 5.5, "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"),
    new Skill("Typescript", 6, "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"),
    new Skill("Firebase", 9, "https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg"),
    new Skill("Python", 5.5, "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg")
  ];
  let mobileSkills = [
    new Skill("Flutter", 10, "https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg"),
    new Skill("Dart", 10, "https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg")
  ];
  $$result.css.add(css$8);
  return `<div class="wrapper s-lIcpYhzVuczm" id="skill-wrapper"><h1 class="title-text" id="skill-title" data-svelte-h="svelte-1mz9s55">Skills</h1> <div class="layout s-lIcpYhzVuczm"><div class="skill-group s-lIcpYhzVuczm"><h2 class="s-lIcpYhzVuczm" data-svelte-h="svelte-1owqdra">Frontend</h2> <div class="skills s-lIcpYhzVuczm">${each(frontendSkills, (item) => {
    return `<div class="skill s-lIcpYhzVuczm"><img${add_attribute("src", item.imageUrl, 0)} alt="skill icon" class="s-lIcpYhzVuczm"> <p class="s-lIcpYhzVuczm">${escape(item.name)}</p> </div>`;
  })}</div></div> <div class="skill-group s-lIcpYhzVuczm"><h2 class="s-lIcpYhzVuczm" data-svelte-h="svelte-1p4vnhq">Backend</h2> <div class="skills s-lIcpYhzVuczm">${each(backendSkills, (item) => {
    return `<div class="skill s-lIcpYhzVuczm"><img${add_attribute("src", item.imageUrl, 0)} alt="skill icon" class="s-lIcpYhzVuczm"> <p class="s-lIcpYhzVuczm">${escape(item.name)}</p> </div>`;
  })}</div></div></div> <div class="skill-group s-lIcpYhzVuczm"><h2 class="s-lIcpYhzVuczm" data-svelte-h="svelte-1wfrjm4">Mobile</h2> <div class="skills s-lIcpYhzVuczm">${each(mobileSkills, (item) => {
    return `<div class="skill s-lIcpYhzVuczm"><img${add_attribute("src", item.imageUrl, 0)} alt="skill icon" class="s-lIcpYhzVuczm"> <p class="s-lIcpYhzVuczm">${escape(item.name)}</p> </div>`;
  })}</div></div> </div>`;
});
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { ariaHidden = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { desc = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaHidden === void 0 && $$bindings.ariaHidden && ariaHidden !== void 0)
    $$bindings.ariaHidden(ariaHidden);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("class", className, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-hidden", ariaHidden, 0)}>${desc ? `<desc>${escape(desc)}</desc>` : ``}${title ? `<title>${escape(title)}</title>` : ``}<path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const AboutShort_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".container.s-744rTax6bpAX.s-744rTax6bpAX{justify-content:center;display:flex;align-items:center;flex-direction:row;margin-block:0rem;margin-inline:auto;height:100vh}.pfp.s-744rTax6bpAX.s-744rTax6bpAX{position:relative;width:23%;border-radius:15px;margin:50px;filter:grayscale(1) blur(5px);transition:all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);box-shadow:0px 0px 5px #34245e}.pfp.s-744rTax6bpAX.s-744rTax6bpAX:hover{filter:none;border-radius:30px;scale:1.1 !important;box-shadow:0px 0px 100px #34245e}.txt-layout.s-744rTax6bpAX.s-744rTax6bpAX{display:flex;justify-content:center;align-items:center;position:relative;width:40%}.txt-layout.s-744rTax6bpAX:hover .text.s-744rTax6bpAX{scale:1.05;user-select:none;letter-spacing:3px}.txt-layout.s-744rTax6bpAX:hover .circle.s-744rTax6bpAX{filter:blur(10px)}.text.s-744rTax6bpAX.s-744rTax6bpAX{text-align:center;transform-origin:center;letter-spacing:-1.4px;line-height:1.3;justify-self:flex-start;width:60%;color:white;border-radius:20px;transition:600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);font-size:80px;word-break:keep-all;text-align:start}.circle.s-744rTax6bpAX.s-744rTax6bpAX{background-color:#34245e;filter:blur(5px);z-index:-1;aspect-ratio:1/1;width:70%;height:120%;position:absolute;left:40%;top:50%;transform:translate(-50%, -50%);border-radius:50%;transition:600ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.icons.s-744rTax6bpAX.s-744rTax6bpAX{display:flex;flex-direction:column;justify-content:center;z-index:150;position:absolute;left:50px;top:50%;transform:translate(0, -50%)}.icons.s-744rTax6bpAX a.s-744rTax6bpAX{margin-block:1rem;color:white;transition:all 600ms cubic-bezier(0.165, 0.84, 0.44, 1)}.icons.s-744rTax6bpAX a svg.s-744rTax6bpAX{transition:all 600ms cubic-bezier(0.165, 0.84, 0.44, 1)}.icons.s-744rTax6bpAX a.s-744rTax6bpAX:hover{color:#7f67be;transform:translateY(-10px) scale(1.1)}.icons.s-744rTax6bpAX a:hover svg.s-744rTax6bpAX{fill:#7f67be !important}@media(width <= 1200px){.container.s-744rTax6bpAX.s-744rTax6bpAX{flex-direction:column;justify-content:center;align-items:center;width:100%;padding-top:5rem}img.s-744rTax6bpAX.s-744rTax6bpAX{width:60%;margin-inline:auto;justify-self:center;left:0}.text.s-744rTax6bpAX.s-744rTax6bpAX{display:block;position:relative;left:0;top:0;width:70%;margin-inline:20px;text-align:center;color:white;transition:600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);font-weight:bold;font-size:60px;white-space:pre-line;word-break:keep-all}}",
  map: null
};
const AboutShort = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="contact"> <div class="icons s-744rTax6bpAX"><a href="mailto:kaloyangfx@gmail.com" target="_blank" class="s-744rTax6bpAX">${validate_component(Email, "Email").$$render($$result, { size: "50" }, {}, {})}</a> <a href="https://www.linkedin.com/in/kaloyan-stoyanov-ba2799205/" target="_blank" class="s-744rTax6bpAX"><svg fill="#ffffff" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve" class="s-744rTax6bpAX"><g id="XMLID_801_"><path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
      		C77.16,101.969,74.922,99.73,72.16,99.73z"></path><path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
      		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path><path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
      		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
      		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
      		C310,145.43,300.549,94.761,230.454,94.761z"></path></g></svg></a> <a href="https://www.facebook.com/kalstst/" target="_blank" class="s-744rTax6bpAX"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" fill="#ffffff" width="50px" height="50px" fill-rule="nonzero" class="s-744rTax6bpAX"><g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g></svg></a></div></div> <div class="container s-744rTax6bpAX"><div class="txt-layout s-744rTax6bpAX" id="short-txt"><div class="circle s-744rTax6bpAX"></div> <div class="text s-744rTax6bpAX">Let&#39;s build something
			<strong data-svelte-h="svelte-cdrrlv">incredible</strong>
			together.</div></div> <img src="/pfp2.webp" class="pfp s-744rTax6bpAX" alt="Kaloyan Stoyanov Selfie"> </div>`;
});
const Education_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".wrapper.s-S2F8hTDmMyVE{width:100%}.layout.s-S2F8hTDmMyVE{display:flex;justify-content:center;align-items:center;flex-direction:column;align-self:center;margin-inline:auto}.title-text.s-S2F8hTDmMyVE{margin-top:0}.row.s-S2F8hTDmMyVE{display:flex;justify-content:space-around;align-items:center;width:80vw;margin-block:2rem}.info.s-S2F8hTDmMyVE{width:40%}img.s-S2F8hTDmMyVE{display:flex;margin:10px;border-radius:20px;transition:all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);width:50%;box-shadow:0px 15px 40px #34245e}img.s-S2F8hTDmMyVE:hover{scale:1.1 !important;z-index:0;box-shadow:0px 15px 60px #34245e;border-radius:50px}.reversed.s-S2F8hTDmMyVE{flex-direction:row-reverse}@media(max-width: 1100px){.layout.s-S2F8hTDmMyVE{width:90%;margin-inline:auto}.row.s-S2F8hTDmMyVE{flex-direction:column;padding:0;margin-inline:0px;width:100%}.info.s-S2F8hTDmMyVE{width:89%}img.s-S2F8hTDmMyVE{width:90%;margin:0}}",
  map: null
};
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="wrapper s-S2F8hTDmMyVE" id="educatWrapper"><h1 class="title-text s-S2F8hTDmMyVE" id="educatTitle" data-svelte-h="svelte-pktygj">Education</h1> <div class="layout s-S2F8hTDmMyVE"><div class="row reversed s-S2F8hTDmMyVE"><div class="info img2 s-S2F8hTDmMyVE"><h1 data-svelte-h="svelte-1umga9v">Applied programming, Vocational High School of Electrical Engineering and Electronics
					“Konstantin Fotinov”, Burgas</h1></div> <img src="/pgee.webp" alt="pgee" class="img1 s-S2F8hTDmMyVE"></div> <div class="row s-S2F8hTDmMyVE"><div class="info img1 s-S2F8hTDmMyVE"><h1 data-svelte-h="svelte-d58sy2">Erasmus+ programs</h1> <h4 data-svelte-h="svelte-1afb0ul">EU Programme for education, training, youth and sport</h4> <h4 data-svelte-h="svelte-1aam5mt">Projects that I have attended:</h4> <ul><li data-svelte-h="svelte-76qkwh">Project under the Erasmus+ program, KD 1, sector Vocational education training on the
						topic: &quot;Education without borders - the world is robotics&quot;</li></ul></div> <img src="/erasmus.webp " alt="erasmus" class="img2 s-S2F8hTDmMyVE"></div></div> </div>`;
});
const ProjectCard_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".project.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6{width:100%;height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}.logo.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6{width:150px;height:150px}.logo-wrapper.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6{text-align:center;flex:1;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;border-right:1px solid white;margin-inline:2rem;padding-right:1.5rem}.logo-wrapper.s-sG1Y6iuX-2Z6 .s-sG1Y6iuX-2Z6{transition:all 600ms cubic-bezier(0.165, 0.84, 0.44, 1)}.logo-wrapper.s-sG1Y6iuX-2Z6 h1.s-sG1Y6iuX-2Z6{font-size:2rem;letter-spacing:1px}.logo-wrapper.s-sG1Y6iuX-2Z6:hover h1.s-sG1Y6iuX-2Z6{letter-spacing:5px}.logo-wrapper.s-sG1Y6iuX-2Z6:hover img.s-sG1Y6iuX-2Z6{scale:1.3}.content.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6{flex:2.5;display:flex;flex-direction:column;justify-content:center;align-items:center}.description.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6{width:90%;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:1.5rem;letter-spacing:0.8px;line-height:1.5}.link.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6{width:25%;font-size:1.2rem;letter-spacing:0.5px;margin-bottom:2rem;border-radius:10px;color:white;background-color:#34245e;text-decoration:none;transition:all 600ms cubic-bezier(0.165, 0.84, 0.44, 1);box-shadow:0px 0px 20px #34245e;padding:0.5rem 1rem;text-align:center}.link.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6:hover{border-radius:20px;box-shadow:0px 0px 50px #34245e;width:50%;color:#f5f5f5;scale:1.1}.images.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6{flex:2;display:flex;flex-direction:row;justify-content:center;align-items:center;margin-right:50px}.images.s-sG1Y6iuX-2Z6 img.s-sG1Y6iuX-2Z6{width:100%;border-radius:20px;box-shadow:0px 15px 40px #34245e}.images.s-sG1Y6iuX-2Z6 .image.s-sG1Y6iuX-2Z6{width:50%;height:auto;margin:1rem;position:relative;left:0px}.position.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6{transition:all 600ms cubic-bezier(0.165, 0.84, 0.44, 1)}.position.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6:hover{transform:rotateZ(0) !important;scale:1.1 !important}.position.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6:nth-child(1){left:0px;transform:rotateZ(-10deg);z-index:2}.position.s-sG1Y6iuX-2Z6.s-sG1Y6iuX-2Z6:nth-child(2){left:0;transform:rotateZ(10deg)}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let projectWrapper;
  let logo;
  let content;
  let imagesDiv;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css$5);
  return `<div class="project s-sG1Y6iuX-2Z6"${add_attribute("this", projectWrapper, 0)}><div class="logo-wrapper s-sG1Y6iuX-2Z6"${add_attribute("this", logo, 0)}><img class="logo s-sG1Y6iuX-2Z6"${add_attribute("src", project.imageUrl, 0)}${add_attribute("alt", project.name, 0)}> <h1 class="title s-sG1Y6iuX-2Z6">${escape(project.name)}</h1></div> <div class="content s-sG1Y6iuX-2Z6"${add_attribute("this", content, 0)}><p class="description s-sG1Y6iuX-2Z6">${escape(project.description)}</p> <a class="link s-sG1Y6iuX-2Z6"${add_attribute("href", project.github, 0)} target="_blank">View Project</a></div> <div class="images s-sG1Y6iuX-2Z6"${add_attribute("this", imagesDiv, 0)}>${each([project.images[0], project.images[1]], (picture) => {
    return `<div class="${["image s-sG1Y6iuX-2Z6", project.images.length != 1 ? "position" : ""].join(" ").trim()}"><img${add_attribute("src", picture, 0)}${add_attribute("alt", project.name, 0)} class="img s-sG1Y6iuX-2Z6"> </div>`;
  })}</div> </div>`;
});
const Projects_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".layout.s-jiMlgG43I2R2{width:100%;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.project.s-jiMlgG43I2R2{margin-block:2rem}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projects = [
    {
      name: "ReportR",
      description: "ReportR is an innovative app that provides a practical solution to the everyday challenges faced by large organizations, such as schools and businesses. The app aims to simplify the process of managing and resolving issues that can arise in these organizations, making it easier for them to maintain a smooth and efficient operation by user contribution. I gained valuable skills in teamwork, coordination, and adaptability.",
      downloadFileLink: "",
      github: "https://github.com/kaloyanstoyanov06/reportr",
      imageUrl: "https://github.com/KaloyanStoyanov06/reportr/blob/master/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true",
      startToEnd: "04/2023",
      images: [
        "/projects/ReportR/1.webp",
        "/projects/ReportR/8.webp",
        "/projects/ReportR/2.webp",
        "/projects/ReportR/3.webp",
        "/projects/ReportR/4.webp",
        "/projects/ReportR/5.webp",
        "/projects/ReportR/6.webp",
        "/projects/ReportR/7.webp",
        "/projects/ReportR/9.webp",
        "/projects/ReportR/10.webp",
        "/projects/ReportR/11.webp"
      ]
    },
    {
      name: "EducateIO",
      description: "EducateIO is a cutting-edge mobile application built on the Flutter framework, designed to revolutionize the way individuals find teachers and learn specific subjects. Whether you're a student seeking personalized education or a private tutor who looks to advertise themselves to more students, Another notable feature of the platform is its facilitation of student collaboration and the exchange of knowledge between students. Throughout my experience, I also acquired practical expertise in utilizing Firebase, specifically its authentication and Firestore functionalities, complementing my proficiency in leveraging Android APIs and Google Maps APIs to create feature-rich mobile applications with intuitive interfaces and advanced mapping functionalities.",
      downloadFileLink: "",
      github: "https://github.com/KaloyanStoyanov06/educate_io",
      imageUrl: "https://github.com/KaloyanStoyanov06/educate_io/blob/master/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true",
      startToEnd: "12/2022 - 02/2023",
      images: [
        "/projects/EducateIO/10.webp",
        "/projects/EducateIO/7.webp",
        "/projects/EducateIO/3.webp",
        "/projects/EducateIO/4.webp",
        "/projects/EducateIO/1.webp",
        "/projects/EducateIO/2.webp",
        "/projects/EducateIO/5.webp",
        "/projects/EducateIO/6.webp",
        "/projects/EducateIO/8.webp",
        "/projects/EducateIO/9.webp",
        "/projects/EducateIO/11.webp",
        "/projects/EducateIO/12.webp",
        "/projects/EducateIO/13.webp",
        "/projects/EducateIO/14.webp"
      ]
    },
    {
      name: "School Program",
      description: "This mobile application is developed using the Flutter framework and utilizes local storage to store program data. It enables users to conveniently schedule recurring programs from Monday to Friday and set reminders for homework and tests. It's extremely useful for students and teachers. I developed proficiency in utilizing local storage and saving settings within the mobile application, optimizing user experience and data management.",
      downloadFileLink: "",
      github: "https://github.com/mutenoic/CharGO",
      imageUrl: "https://github.com/KaloyanStoyanov06/school_program/blob/main/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true",
      startToEnd: "09/2022",
      images: [
        "/projects/School/1.webp",
        "/projects/School/2.webp",
        "/projects/School/3.webp",
        "/projects/School/4.webp",
        "/projects/School/5.webp",
        "/projects/School/6.webp",
        "/projects/School/7.webp",
        "/projects/School/8.webp"
      ]
    },
    {
      name: "CharGO",
      description: "CharGO is a mobile app that aims to revolutionize the way users find and reserve electric car chargers.With a user- friendly interface, CharGO simplifies the process of locating and booking charging stations, providing a seamless experience for electric vehicle owners. I developed the ability to construct and present innovative ideas effectively.",
      downloadFileLink: "",
      github: "https://github.com/mutenoic/CharGO",
      imageUrl: "https://camo.githubusercontent.com/b9b0ac02657b31fabe92e3240e8eb7278c7ade3879fdd7879eabdd16b345b42d/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313039303434353336303835393732353836342f313131343439323333393932333230363135342f63686172676f5f6e6f5f62672e706e67",
      startToEnd: "06/2023",
      images: [
        "/projects/CharGO/6.webp",
        "/projects/CharGO/2.webp",
        "/projects/CharGO/1.webp",
        "/projects/CharGO/3.webp",
        "/projects/CharGO/4.webp",
        "/projects/CharGO/5.webp"
      ]
    }
  ];
  $$result.css.add(css$4);
  return `<div class="wrapper" id="project-wrapper"><h1 class="title-text" id="project-title" data-svelte-h="svelte-7jvbv5">Projects</h1> <div class="layout s-jiMlgG43I2R2">${each(projects, (project) => {
    return `<div class="project s-jiMlgG43I2R2">${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})} </div>`;
  })}</div> </div>`;
});
const AwardCard_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".award.s-F1BWqvtnUdwn.s-F1BWqvtnUdwn{display:flex;justify-content:center;align-items:center}.txt.s-F1BWqvtnUdwn.s-F1BWqvtnUdwn{flex:2;margin-inline:3rem;text-align:center}.txt.s-F1BWqvtnUdwn .title.s-F1BWqvtnUdwn{margin:0;padding-bottom:2%;border-bottom:2px solid white;margin-inline:auto !important}.txt.s-F1BWqvtnUdwn p.s-F1BWqvtnUdwn{font-weight:400;letter-spacing:1.5px;font-size:1.5rem;line-height:1.5}.location.s-F1BWqvtnUdwn.s-F1BWqvtnUdwn{margin-top:2rem}.location.s-F1BWqvtnUdwn h4.s-F1BWqvtnUdwn{margin:0}.reversed.s-F1BWqvtnUdwn.s-F1BWqvtnUdwn{flex-direction:row-reverse}.img.s-F1BWqvtnUdwn.s-F1BWqvtnUdwn{flex:1;margin-inline:3rem}img.s-F1BWqvtnUdwn.s-F1BWqvtnUdwn{width:100%;height:auto;border-radius:20px;transition:all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);box-shadow:0px 20px 40px #381e72}img.s-F1BWqvtnUdwn.s-F1BWqvtnUdwn:hover{scale:1.05 !important;box-shadow:0px 20px 40px #381e72;border-radius:50px}",
  map: null
};
const AwardCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { award } = $$props;
  let { reversed = false } = $$props;
  let wrapper;
  let content;
  let image;
  if ($$props.award === void 0 && $$bindings.award && award !== void 0)
    $$bindings.award(award);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0)
    $$bindings.reversed(reversed);
  $$result.css.add(css$3);
  return `<div class="${["award s-F1BWqvtnUdwn", reversed ? "reversed" : ""].join(" ").trim()}"${add_attribute("this", wrapper, 0)}><div class="txt s-F1BWqvtnUdwn"${add_attribute("this", content, 0)}><div><h1 class="title s-F1BWqvtnUdwn">${escape(award.title)}</h1> <p class="s-F1BWqvtnUdwn">${escape(award.description)}</p></div> <div class="location s-F1BWqvtnUdwn"><h4 class="s-F1BWqvtnUdwn">${escape(award.location)}</h4> <h4 class="s-F1BWqvtnUdwn">${escape(award.date)}</h4></div></div> ${award.imageUrl ? `<div class="img s-F1BWqvtnUdwn"><img alt="award"${add_attribute("src", award.imageUrl, 0)} class="s-F1BWqvtnUdwn"${add_attribute("this", image, 0)}></div>` : ``} </div>`;
});
const Awards_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".awards.s-cHLIc_tA2E_H{display:flex;flex-direction:column;align-items:center;overflow:hidden}.ach.s-cHLIc_tA2E_H{margin-block:5rem}@media(max-width: 1100px){.awards.s-cHLIc_tA2E_H{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;display:flex}}",
  map: null
};
const Awards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let awards = [
    {
      title: "1st place at ROBO DAYS'23, competition hosted by Technical University Sofia",
      description: "Working together with a talented classmate, our team managed to clinch the top spot in the software project category, leaving other teams behind.",
      date: "04/2023",
      location: "Sofia",
      imageUrl: "/robodays.webp"
    },
    {
      title: "1st place at BurgasBlueS 2023, hackathon hosted by University prof. dr.Asen Zlatarov ",
      description: "Me and my friend formed a successful team that placed at first position in the junior project category, surpassing numerous competing teams emerging as the ultimate winners.",
      date: "06/2023",
      location: "Burgas",
      imageUrl: "/burgasblues.webp"
    },
    {
      title: " Secured 7th place at the National Competition of IT, comprising regional and national",
      description: "In the regional phase, I achieved an impressive score of 93 out of 100. Moving on to the national phase, I performed exceptionally well, securing the 3rd place out of 30 participants in the test with a score of 89 out of 100. Additionally, in the presentation component of the national phase, I attained a commendable score of 77 out of 100.",
      date: "04/2023",
      location: "Shumen",
      imageUrl: "/noit.png"
    },
    {
      title: "Diploma Vyarnata posoka",
      description: "I was honored with the prestigious 'Vyarnata Posoka' diploma, awarded for my exceptional performance in the National Olympiad in Information Technology, where I secured an impressive 7th place in the 8-10th class age category.",
      date: "06/2021",
      location: "Burgas",
      imageUrl: "/vyarnataposoka.webp"
    },
    {
      title: "2nd place at 6-th Regional IT Competition",
      description: "I attained the '2nd place' at the 6th Regional IT Competition in Burgas. The competition consisted of both a theoretical and practical section. I achieved a score of 98 out of 100.",
      date: "06/2021",
      location: "Burgas",
      imageUrl: void 0
    }
  ];
  let wrapper;
  let title;
  $$result.css.add(css$2);
  return `<div class="wrapper"${add_attribute("this", wrapper, 0)}><h1 class="title-text"${add_attribute("this", title, 0)} data-svelte-h="svelte-1aoq8p1">Achievements</h1> <div class="awards s-cHLIc_tA2E_H">${each(awards, (award, i) => {
    return `<div class="ach s-cHLIc_tA2E_H">${validate_component(AwardCard, "AwardCard").$$render($$result, { award, reversed: (i + 1) % 2 == 0 }, {}, {})} </div>`;
  })} </div> </div>`;
});
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { ariaHidden = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { desc = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaHidden === void 0 && $$bindings.ariaHidden && ariaHidden !== void 0)
    $$bindings.ariaHidden(ariaHidden);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("class", className, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-hidden", ariaHidden, 0)}>${desc ? `<desc>${escape(desc)}</desc>` : ``}${title ? `<title>${escape(title)}</title>` : ``}<path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const ContactMe_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.s-bWnlPNjDscZC.s-bWnlPNjDscZC{margin-bottom:5rem}.layout.s-bWnlPNjDscZC.s-bWnlPNjDscZC{display:flex;justify-content:space-evenly;flex-direction:row;align-items:center}.col.s-bWnlPNjDscZC.s-bWnlPNjDscZC{flex:1;display:flex;justify-content:center;align-items:center;flex-direction:column}.socials.s-bWnlPNjDscZC.s-bWnlPNjDscZC{display:flex;justify-content:space-evenly;align-items:center;flex-direction:row;flex-wrap:wrap;margin-block:2rem}.socials.s-bWnlPNjDscZC .social-card.s-bWnlPNjDscZC{cursor:pointer;margin-inline:2rem;padding:2rem;border-radius:1rem;width:5rem;flex:1;display:flex;justify-content:space-evenly;align-items:center;flex-direction:column;background-color:#34245e;transition:all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);box-shadow:0 10px 40px #4f378b;user-select:none;letter-spacing:1px}.socials.s-bWnlPNjDscZC .social-card img.s-bWnlPNjDscZC{width:50px;transition:all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)}.socials.s-bWnlPNjDscZC .social-card.s-bWnlPNjDscZC:hover{background-color:#4f378b;scale:1.1;transform:translateY(-10px);box-shadow:0 20px 60px #4f378b;letter-spacing:2px}.socials.s-bWnlPNjDscZC .social-card:hover img.s-bWnlPNjDscZC{scale:1.1}.socials.s-bWnlPNjDscZC .social-card.s-bWnlPNjDscZC:active{transform:translateY(-5px);scale:1.05;box-shadow:0 10px 50px #4f378b}.contact-form.s-bWnlPNjDscZC.s-bWnlPNjDscZC{flex:1}",
  map: null
};
const ContactMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let socials = [
    {
      name: "Github",
      imageUrl: "/logos/github.svg",
      username: "KaloyanStoyanov06",
      link: "https://github.com/KaloyanStoyanov06"
    },
    {
      name: "LinkedIn",
      imageUrl: "/logos/linkedin.svg",
      username: "Kaloyan Stoyanov",
      link: "https://www.linkedin.com/in/kaloyan-stoyanov-ba2799205/"
    },
    {
      name: "Facebook",
      imageUrl: "/logos/facebook.svg",
      username: "Калоян Стоянов",
      link: "https://www.facebook.com/kalstst/"
    }
  ];
  $$result.css.add(css$1);
  return `<div class="wrapper s-bWnlPNjDscZC"><h1 class="title-text" data-svelte-h="svelte-wvekjt">Contact me</h1> <div class="layout s-bWnlPNjDscZC"><div class="col s-bWnlPNjDscZC"><div class="socials s-bWnlPNjDscZC">${each(socials, (social) => {
    return `<div class="social-card s-bWnlPNjDscZC"><img${add_attribute("src", social.imageUrl, 0)}${add_attribute("alt", social.name, 0)} class="s-bWnlPNjDscZC"> <h2 id="name">${escape(social.name)}</h2> </div>`;
  })}</div> <div class="info"><p class="info-tile"><mat-icon data-svelte-h="svelte-1kelpw1">location_on</mat-icon>Burgas</p> <p class="info-tile clickable">${validate_component(Email, "Email").$$render($$result, {}, {}, {})} kaloyangfx@gmail.com</p> <p class="info-tile clickable">${validate_component(Phone, "Phone").$$render($$result, {}, {}, {})} +359879900137</p> <p class="info-tile"><mat-icon data-svelte-h="svelte-1k8tdey">school</mat-icon>PGEE Burgas</p></div></div> <div class="contact-form s-bWnlPNjDscZC"></div></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about-short.s-y_bCXRrkrYfP{height:120%;display:flex;justify-content:center;align-items:center}.sections.s-y_bCXRrkrYfP{margin:0;width:100%;display:flex;flex-direction:column}.layout.s-y_bCXRrkrYfP{display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  gsap.registerPlugin(ScrollTrigger);
  let currentFavicon = "/light-favicon.png";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t8bs7w_START --><link rel="icon"${add_attribute("href", currentFavicon, 0)}>${$$result.title = `<title>Kaloyan Stoyanov</title>`, ""}<!-- HEAD_svelte-t8bs7w_END -->`, ""} <div class="layout s-y_bCXRrkrYfP"><div class="about-short s-y_bCXRrkrYfP">${validate_component(AboutShort, "AboutShort").$$render($$result, {}, {}, {})}</div> <div class="sections s-y_bCXRrkrYfP"><div id="education" class="section">${validate_component(Education, "Education").$$render($$result, {}, {}, {})}</div> <div class="section" id="skills">${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}</div> <div class="section" id="projects">${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}</div> <div class="section" id="awards">${validate_component(Awards, "Awards").$$render($$result, {}, {}, {})}</div> <div class="section" id="contact me">${validate_component(ContactMe, "ContactMe").$$render($$result, {}, {}, {})}</div> </div> </div>`;
});
export {
  Page as default
};
