import Link from "next/link";
import Header from "@/components/Header";
import { Container } from "@/components/layout";
import { TwitterIcon } from "@/components/tags";
import { TwitterBtn } from "@/components/blocks";
import { SubscribeForm, FORMTYPE } from "@/components/subscribe";

export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <Container>
        <div>
          <div className="flex items-center mb-10">
            <img
              className="rounded-full mr-8"
              width="128"
              height="128"
              src="/gourav.jpg"
              alt="Gourav Goyal"
            />
            <div className="prose prose-lg">
              <h1
                className="bg-clip-text text-transparent pb-3 mb-4 tracking-wide " // bg-gradient-to-r from-blue-500 to-green-400
                style={{
                  backgroundImage: "linear-gradient(90deg,#007CF0,#00DFD8)",
                }}
              >
                Gourav Goyal
              </h1>

              <nav className="flex space-x-14">
                <Link href="https://twitter.com/GorvGoyl">
                  <a
                    target="blank"
                    rel="noopener"
                    title="Follow @GorvGoyl on Twitter"
                  >
                    GorvGoyl
                    <TwitterIcon class="inline w-4 h-4 m-0 ml-1" />
                  </a>
                </Link>
                <Link href="/blog">
                  <a title="Blog">Blog</a>
                </Link>
                {/* <Link href="/about">
                <a>About Me</a>
              </Link> */}
              </nav>
            </div>
          </div>

          <div className="prose prose-lg">
            <p>
              Namaste, My name is Gourav Goyal. I'm a tech founder, full-stack
              developer, and a fun guy to hang around with. For the past 6
              years, I've been building products that are being used by
              thousands of people. Previously, I co-founded{" "}
              <a
                href="https://www.crunchbase.com/organization/evrcare"
                target="_blank"
                rel="noopener"
              >
                EvrCare
              </a>
              , and currently exploring <i>Indie Hackers'</i> path. <br />{" "}
              Connect with me on{" "}
              <a href="https://twitter.com/GorvGoyl">Twitter</a> and{" "}
              <a href="https://www.linkedin.com/in/gorvgoyl/">LinkedIn</a>. You
              can also reach out at{" "}
              <a href="mailto:hey@gourav.io">hey@gourav.io</a>.
            </p>
            <div>
              <h2>Projects</h2>
              <ul>
                <li>
                  <p>
                    <Link href="/notion-boost">
                      <a title="Notion Boost browser extension">Notion Boost</a>
                    </Link>
                    <span className="badge-wrapper">
                      <a
                        title="source code"
                        href="https://github.com/GorvGoyl/Notion-Boost-browser-extension"
                        target="_blank"
                      >
                        <img
                          alt="source code"
                          src="https://img.shields.io/static/v1?label=&message=code&logo=github&style=flat-square&color=555555"
                        />
                      </a>
                      <a
                        title="Chrome Web Store link"
                        href="https://chrome.google.com/webstore/detail/notion-boost/eciepnnimnjaojlkcpdpcgbfkpcagahd"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          alt="Chrome Web Store downloads"
                          src="https://img.shields.io/chrome-web-store/users/eciepnnimnjaojlkcpdpcgbfkpcagahd?label=downloads&style=flat-square&color=007CF0"
                        />
                      </a>
                      <img
                        alt="Chrome Web Store rating"
                        src="https://img.shields.io/chrome-web-store/stars/eciepnnimnjaojlkcpdpcgbfkpcagahd?style=flat-square&color=007CF0"
                      />
                    </span>
                    Chrome & Firefox browser extension for <em>Notion.so</em> to
                    add features like outline (table of contents), bolder text,
                    and more.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://marketplace.visualstudio.com/items?itemName=jerrygoyal.shortcut-menu-bar"
                      target="blank"
                      rel="noopener"
                      title="Shortcut Menubar VSCode extension"
                    >
                      Shortcut Menubar
                    </a>
                    <span className="badge-wrapper">
                      <a
                        title="source code"
                        href="https://github.com/GorvGoyl/Shortcut-Menu-Bar-VSCode-Extension"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          alt="source code"
                          src="https://img.shields.io/static/v1?label=&message=code&logo=github&style=flat-square&color=555555"
                        />
                      </a>
                      <a
                        title="VSCode Marketplace link"
                        href="https://marketplace.visualstudio.com/items?itemName=jerrygoyal.shortcut-menu-bar"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          alt="Visual Studio Marketplace Downloads"
                          src="https://img.shields.io/visual-studio-marketplace/d/jerrygoyal.shortcut-menu-bar?style=flat-square&color=007CF0"
                        />
                      </a>
                      <img
                        alt="Visual Studio Marketplace Rating (Stars)"
                        src="https://img.shields.io/visual-studio-marketplace/stars/jerrygoyal.shortcut-menu-bar?style=flat-square&color=007CF0"
                      />
                    </span>
                    VSCode extension which adds useful buttons like beautify,
                    open files, undo, redo, etc to the editor in Visual Studio
                    Code.
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="/clone-wars">
                      <a title="Clone Wars">Clone Wars</a>
                    </Link>
                    <span className="badge-wrapper">
                      <a
                        title="GitHub repo stars"
                        href="https://github.com/gorvgoyl/clone-wars"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          alt="GitHub repo stars"
                          src="https://img.shields.io/github/stars/gorvgoyl/clone-wars?style=flat-square&logo=github&color=007CF0"
                        />
                      </a>
                      <a
                        title="Github repo forks"
                        href="https://github.com/gorvgoyl/clone-wars"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          alt="GitHub forks"
                          src="https://img.shields.io/github/forks/gorvgoyl/clone-wars?style=flat-square&logo=github&color=007CF0"
                        />
                      </a>
                    </span>
                    List of 100+ open-source clones of popular sites like
                    Airbnb, Spotify, Tiktok, Netflix, etc.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://chrome.google.com/webstore/detail/popup-notes/pakngoacmndjaomplokegbepmohpfofb?hl=en"
                      target="blank"
                      rel="noopener"
                      title="Popup Notes chrome extension"
                    >
                      Popup Notes
                    </a>{" "}
                    <br />
                    Lightweight Chrome extension to take quick notes without
                    leaving current tab.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://jerrygoyal-firebase-project.web.app/"
                      target="blank"
                      rel="noopener"
                      title="Material design portfolio website"
                    >
                      Portfolio site
                    </a>{" "}
                    <br />
                    My old portfolio site built around material guidelines &
                    responsiveness without using any css framework or library.
                  </p>
                </li>
              </ul>
            </div>
            <SubscribeForm type={FORMTYPE.Generic} />
            <TwitterBtn />
          </div>

          {/* disable below twitter widget */}
          {/* <div className="mt-12 justify-center flex">
            <a
              href="https://twitter.com/GorvGoyl?ref_src=twsrc%5Etfw"
              className="twitter-follow-button"
              data-size="large"
              data-dnt="true"
              data-show-count="false"
            >
              Follow @GorvGoyl
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            />
          </div> */}
        </div>
      </Container>
    </div>
  );
}
